import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../../config/firebase';
import * as yup from 'yup';

interface FormData {
  title: string;
  description: string;
}

export const Post = () => {
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required('You must add the title'),
    description: yup.string().required('You must add the Description'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, 'posts');

  const onCreatePost = async (data: FormData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
  };
  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title...." {...register('title')} />
      <p>{errors.title?.message}</p>
      <textarea placeholder="Description...." {...register('description')} />
      <p>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
};

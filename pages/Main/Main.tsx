import * as React from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
interface Posts {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postsList, setPostsList] = React.useState<Posts[] | null>(null);
  const PostsRef = collection(db, 'posts');
  const getPost = async () => {
    const data = await getDocs(PostsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
    );
  };
  React.useEffect(() => {
    getPost();
  }, []);
  return <div>This is MAin Page</div>;
};

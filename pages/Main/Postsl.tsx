import * as React from 'react';
import { Posts } from './Main';

interface Props {
  post: Posts;
}

export const Postsl = (props: Props) => {
  const { post } = props;
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
    </div>
  );
};

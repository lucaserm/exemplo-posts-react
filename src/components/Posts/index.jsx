import { PostCard } from '../PostCard';

import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard 
        key={post.id} 
        post={post} 
      />
    ))}
  </div>
);
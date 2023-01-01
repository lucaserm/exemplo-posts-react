import p from 'prop-types';
import { PostCard } from '../PostCard';

import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: p.arrayOf(
    p.shape({
      title: p.string.isRequired,
      cover: p.string.isRequired,
      body: p.string.isRequired,
      id: p.number.isRequired,
    }),
  ),
};

import p from 'prop-types';
import './styles.css';

export const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title} />
    <div className="post-content">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: p.objectOf(
    p.shape({
      title: p.string.isRequired,
      cover: p.string.isRequired,
      body: p.string.isRequired,
      id: p.number.isRequired,
    }),
  ),
};

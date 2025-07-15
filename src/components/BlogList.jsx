import BlogPost from './BlogPost';

const BlogList = ({ posts, onUpdate, onDelete }) => {
  return (
    <section className="blog-list-container" aria-label="Blog Posts">
      {posts.length === 0 ? (
        <p className="no-posts-message">No posts available</p>
      ) : (
        posts.map(post => (
          <BlogPost key={post.id} post={post} onUpdate={onUpdate} onDelete={onDelete} />
        ))
      )}
    </section>
  );
};

export default BlogList;
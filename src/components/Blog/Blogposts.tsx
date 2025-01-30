import React from "react";
import { blogPosts } from "../Blog/Blogposts";

const BlogList: React.FC = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <strong>{post.author}</strong> - {post.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

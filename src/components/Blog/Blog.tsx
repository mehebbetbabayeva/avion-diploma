import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import "./Blog.css";

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>Read our latest articles and tutorials.</p>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

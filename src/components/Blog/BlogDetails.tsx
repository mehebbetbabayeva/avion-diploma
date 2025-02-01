import React from "react";
import "./Blog.css";
import { FormattedMessage } from "react-intl";

interface Blog {
  blog: {
    id: number;
    image: string;
    title: string;
    content: string;
    author: string;
    date: string;
  };
}

const BlogDetails: React.FC<Blog> = ({ blog }) => {
  return (
    <div className="blog-details-container">
      <div className="blog-header">
        <h1> <FormattedMessage id="blogpost"/> </h1>
      </div>
      
      <div key={blog.id} className="blog-post">
        <img className="image-detail" src={blog.image} alt={blog.title} />
        <div className="blog-content">
          <h2>{blog.title}</h2>
          <p className="blog-text">{blog.content}</p>
          <p className="blog-meta">
            <strong>{blog.author}</strong> - <span>{blog.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

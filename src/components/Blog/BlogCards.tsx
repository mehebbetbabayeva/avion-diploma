import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { FormattedMessage } from "react-intl";


interface BlogPost {
  id: number;
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogCards: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/blogposts.json") 
      .then((response) => response.json())
      .then((data: BlogPost[]) => setBlogPosts(data))
      .catch((error) => console.error("Error loading blog posts:", error));
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-title">
      <h1><FormattedMessage id="Blog"/></h1>
      <p><FormattedMessage id="Blog1"/></p>
      </div>
     
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
           <div className="blog-image"> <img className="image" src={post.image} /></div>
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
            <p className="author">By {post.author}</p>
        
            <Link to={`/blog/${post.id}`} className="read-more">
            <FormattedMessage id="read"/> →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
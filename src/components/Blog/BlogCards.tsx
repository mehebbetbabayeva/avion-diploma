import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";


interface BlogPost {
  id: number;
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
      <h1>Blog</h1>
      <p>Read our latest articles and tutorials.</p>
      </div>
     
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
            <p className="author">By {post.author}</p>
        
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
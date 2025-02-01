import React from "react";

interface Blog {
  blog:{
    id: number;
    image: string;
    title: string;
    content: string;
    author: string;
    date: string;
  }
 
}
const BlogDetails: React.FC<Blog> = ({blog}) => {


  return (
    <div>
      <h1>Blog Posts</h1>
      
        <div key={blog.id} className="blog-post">
        <img className="image">{blog.image} </img> 
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>
            <strong>{blog.author}</strong> - {blog.date}
          </p>
        </div>
  
    </div>
  );
};

export default BlogDetails;

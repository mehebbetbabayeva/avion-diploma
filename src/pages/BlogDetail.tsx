
import BlogDetails from '../components/Blog/BlogDetails'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Blog {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
  }
const BlogDetail = () => {
    const { id } = useParams<{ id: string }>(); 
    const [blog, setBlog] = useState<Blog | null>(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get<Blog[]>("/blogposts.json");
          const selectedProduct = response.data.find(
            (item) => item.id === Number(id)
          );
          setBlog(selectedProduct || null);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (!blog) {
      return <p>Blog not found</p>;
    }
  return (
    <div>
        <BlogDetails blog={blog}/>
    </div>
  )
}

export default BlogDetail
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { blogData } from "@/app/Data/data";
import BlogCard from "./BlogCard";
import "./blog.css/blog.css"; // Import custom CSS

const Blog = () => {
  return (
    <div className="blog-section">
      <SectionHeading>Our Blog</SectionHeading>
      <div className="blog-grid">
        {blogData.map((blog, i) => (
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}`}
            key={blog.id}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

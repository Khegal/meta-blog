"use client";

import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";

interface BlogResponse {
  items: {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    categories: string[];
    authorName: string;
    authorImage: string;
    createdAt: string;
  }[];
  pageInfo: {
    totalPages: number;
    totalElements: number;
    page: number;
    size: number;
  };
}

export const BlogListing: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogResponse["items"]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://next-mock-api.vercel.app/api/posts?size=9"
      );
      const data: BlogResponse = await response.json();
      setBlogs(data.items);
    };

    fetchData();
  }, []);

  return (
    <section className="mt-12 flex flex-col justify-center ">
      <h2 className="font-bold text-2xl leading-7 text-textColor2 mb-12">
        All Blog Posts
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((item) => (
          <div key={item.id} className="">
            <BlogCard post={item} />
          </div>
        ))}
      </div>
      <div className="items-center flex justify-center">
        <button className="border-[#696A754D] justify-center border py-3 px-5 font-medium rounded-md text-[#696A75] mt-8 mb-20 inline-flex">
          Load More
        </button>
      </div>
    </section>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { BlogCardHome } from "./BlogCardHome";

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

const BlogHome: React.FC = () => {
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
    <div className="flex flex-col gap-[100px] mb-[100px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <p className="font-bold text-2xl leading-7 text-textColor2">
            All Blog Post
          </p>
          <div className="w-full flex gap-5 ltr">
            <p className="text-[#D4A373] font-bold text-xs leading-[25px]">
              All
            </p>
            <p className="text-[#495057] font-bold text-xs leading-[25px]">
              Design
            </p>
            <p className="text-[#495057] font-bold text-xs leading-[25px]">
              Travel
            </p>
            <p className="text-[#495057] font-bold text-xs leading-[25px]">
              Fashion
            </p>
            <p className="text-[#495057] font-bold text-xs leading-[25px]">
              Technology
            </p>
            <p className="text-[#495057] font-bold text-xs leading-[25px]">
              Branding
            </p>
            <p className="text-[#495057] font-bold text-xs leading-[25px] ms-auto">
              View All
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {blogs.map((item) => (
            <div key={item.id} className="mb-8">
              <BlogCardHome post={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-[#696A754D] flex justify-center border py-3 px-5 font-medium rounded-md text-[#696A75]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogHome;

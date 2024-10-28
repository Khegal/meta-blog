"use client";

import Link from "next/link";
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
  const [categoriesData, setCategoriesData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://next-mock-api.vercel.app/api/posts?size=9"
      );
      const data: BlogResponse = await response.json();
      setBlogs(data.items);
    };

    const fetchCategories = async () => {
      const categoriesResponse = await fetch(
        "https://next-mock-api.vercel.app/api/posts/categories"
      );
      const categoriesData = await categoriesResponse.json();
      setCategoriesData(categoriesData);
    };

    fetchData();
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-[100px] mb-[100px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <p className="font-bold text-2xl leading-7 text-textColor2">
            All Blog Post
          </p>
          <div className="flex gap-5">
            <Link href={"/blog"} className="text-xs font-bold text-[#D4A373]">
              All
            </Link>
            {categoriesData.map((category, index) => (
              <Link
                key={index}
                href={"/Category/" + category}
                className="text-xs font-bold text-[#495057]"
              >
                {category}
              </Link>
            ))}
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

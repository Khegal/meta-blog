"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
  const [pageInfo, setPageInfo] = useState<BlogResponse["pageInfo"] | null>(
    null
  );

  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current page from the search parameters
  const page = searchParams.get("page") || "1";

  // Fetch data based on the page query parameter
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://next-mock-api.vercel.app/api/posts?size=9&page=${page}`
      );
      const data: BlogResponse = await response.json();
      setPageInfo(data.pageInfo);
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
  }, [page]); // Dependency on the page query parameter

  // Handle page change and update the search parameters in the URL
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

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
            <Link key={item.id} className="block" href={`/Blog/${item.id}`}>
              <BlogCardHome post={item} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {pageInfo && (
          <nav
            aria-label="Page navigation example"
            className="flex justify-center my-10"
          >
            <ul className="inline-flex -space-x-px text-sm">
              {Array.from({ length: pageInfo.totalPages }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${
                      index + 1 === parseInt(page)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-500 bg-white"
                    } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogHome;

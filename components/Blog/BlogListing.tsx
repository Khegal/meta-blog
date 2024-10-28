"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import { useSearchParams, useRouter } from "next/navigation";

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
  const [pageInfo, setPageInfo] = useState<BlogResponse["pageInfo"] | null>(
    null
  );
  const searchParams = useSearchParams();
  const router = useRouter();

  const q = searchParams.get("q") || "";
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        q
          ? `https://next-mock-api.vercel.app/api/posts?size=12&q=${q}&page=${page}`
          : `https://next-mock-api.vercel.app/api/posts?size=12&page=${page}`
      );
      const data: BlogResponse = await response.json();
      setBlogs(data.items);
      setPageInfo(data.pageInfo);
    };

    fetchData();
  }, [q, page]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <section className="mt-12 flex flex-col justify-center">
      <h2 className="font-bold text-2xl leading-7 text-textColor2 mb-12">
        All Blog Posts
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogCard post={item} />
          </Link>
        ))}
      </div>

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
    </section>
  );
};

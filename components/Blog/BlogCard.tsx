"use client";

import Image from "next/image";
import dayjs from "dayjs";

export const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col p-4 gap-4 border-borderColor2 border rounded-xl">
      <Image
        src={post.image}
        alt={post.authorName}
        width={360}
        height={240}
        className="h-auto object-contain rounded-md"
      />
      <div className="flex flex-col p-2 gap-5">
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2">
            {post.categories.map((category) => (
              <div
                key={category}
                className="bg-[#4B6BFB]/5 py-1 px-2.5 inline-block text-[#4B6BFB] text-xs leading-5 rounded-md font-medium"
              >
                {category}
              </div>
            ))}
          </div>
          <h3 className="font-semibold text-2xl text-textColor2 leading-7">
            {post.title}
          </h3>
        </div>
        <div className="flex gap-5 text-center items-center">
          <div className="flex gap-3">
            <Image
              src={post.authorImage}
              width={36}
              height={36}
              alt=""
              className="rounded-full"
            />
            <p className="text-[#97989F] flex text-center items-center font-medium">
              {post.authorName}
            </p>
          </div>
          <p className="text-[#97989F]">
            {dayjs(post.createdAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

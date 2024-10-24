"use client";

import Image from "next/image";
import dayjs from "dayjs";

export const BlogCardHome = ({ post }) => {
  return (
    <div className="flex flex-col p-4 gap-4 border-borderColor2 border rounded-xl">
      <Image
        src={post.image}
        alt=""
        width={360}
        height={240}
        className="h-60 rounded-md aspect-[360/240] object-fill"
      />
      <div className="flex flex-col p-2 gap-5">
        <div className="flex flex-col gap-4 items-start">
          <p className="rounded-md text-sm font-medium bg-[#4B6BFB0D] text-[#4B6BFB] inline-flex px-2.5 py-1">
            Design
          </p>
          <h3 className="font-semibold text-2xl text-textColor2 leading-7">
            {post.title}
          </h3>
        </div>
        <p className="text-[#97989F] text-base">
          {dayjs(post.createdAt).format("MMMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

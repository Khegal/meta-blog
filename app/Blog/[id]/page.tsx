import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";

import "./content.css";

export async function generateMetadata({ params }) {
  const id = (await params).id;

  const post = await fetch(
    `https://next-mock-api.vercel.app/api/posts/${id}`
  ).then((res) => res.json());

  return {
    title: post.title,
    openGraph: {
      image: "https://images3.alphacoders.com/132/1328547.png",
    },
  };
}

const ArticleRead = async ({ params }) => {
  const { id } = params;

  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts/" + id
  );
  if (response.status === 404) return notFound();
  const post = await response.json();

  return (
    <section className="w-[800px] flex flex-col justify-center items-center mx-auto mb-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold text-textColor2">{post.title}</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              alt={post.authorName}
              src={post.authorImage}
              width={36}
              height={36}
              className="object-cover rounded-full aspect-square"
            />
            <p className="text-borderColor font-medium text-sm">
              {post.authorName}
            </p>
          </div>
          <p className="text-borderColor text-sm">
            {dayjs(post.createdAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </div>
      <Image
        src={post.image}
        width={800}
        height={462}
        className="rounded-xl my-8"
        alt=""
      />

      <div
        className="content text-textColor text-xl leading-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </section>
  );
};

export default ArticleRead;

import { BlogCardHome } from "@/components/Home/BlogCardHome";
import Link from "next/link";
import { notFound } from "next/navigation";

const CategoryRead = async ({ params }) => {
  const { name } = params;

  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts/categories/" + name
  );
  if (response.status === 404) return notFound();
  const categoryPosts = await response.json();

  return (
    <section className="container">
      <h1 className="text-[#181A2A] font-bold text-2xl mb-12">{name} posts</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categoryPosts.items.map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogCardHome post={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryRead;

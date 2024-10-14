import Slider from "@/components/Slider";
import Trending from "@/components/Trending";
import BlogHome from "@/components/BlogHome";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Slider />
      <Trending />
      <BlogHome />
    </div>
  );
}

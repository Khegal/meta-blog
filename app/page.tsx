import Slider from "@/components/Home/Slider";
import Trending from "@/components/Home/Trending";
import BlogHome from "@/components/Home/BlogHome";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Slider />
      <Trending />
      <BlogHome />
    </div>
  );
}

import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex flex-col p-4 gap-4 border-borderColor2 border rounded-xl">
        <Image
          src={"/photo2.png"}
          alt=""
          width={360}
          height={240}
          className="h-auto object-contain rounded-md"
        />
        <div className="flex flex-col p-2 gap-5">
          <div className="flex flex-col gap-4 items-start">
            <p className="rounded-md text-sm font-medium bg-[#4B6BFB0D] text-[#4B6BFB] inline-flex px-2.5 py-1">
              Design
            </p>
            <h3 className="font-semibold text-2xl text-textColor2">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h3>
          </div>
          <div className="flex gap-5 text-center items-center">
            <div className="flex gap-3">
              <Image
                src={"/pfp.jpg"}
                width={36}
                height={36}
                alt=""
                className="rounded-full"
              />
              <p className="text-[#97989F] flex text-center items-center font-medium">
                Eric Smith
              </p>
            </div>
            <p className="text-[#97989F]">August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogListing = () => {
  return (
    <section className="mt-12">
      <h2 className="font-bold text-2xl leading-7 text-textColor2 mb-12">
        All Blog Post
      </h2>
      <div className="flex justify-center flex-col w-full items-center">
        <BlogCard />
        <button className="border-[#696A754D] justify-center border py-3 px-5 font-medium rounded-md text-[#696A75] mt-8 mb-20 flex">
          Load More
        </button>
      </div>
    </section>
  );
};

export default BlogListing;

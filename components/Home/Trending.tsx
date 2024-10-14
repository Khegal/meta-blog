import Image from "next/image";

const Trending = () => {
  return (
    <div className="flex gap-[30px] flex-col mb-[100px]">
      <p className="font-bold text-2xl text-textColor2 leading-7">Trending</p>
      <div className="flex justify-between">
        <div className="w-[289px] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#14162466]"></div>
          <Image
            src={"/photo1.png"}
            alt=""
            width={289}
            height={320}
            className="object-cover h-[320px] "
          />
          <div className="absolute bottom-[28px] right-[30.5px] left-[28.5px] flex flex-col gap-4  items-start">
            <p className="bg-[#4B6BFB] font-medium text-white text-xs leading-5 px-2.5 py-1 rounded-md inline-flex">
              Technology
            </p>
            <p className="text-white font-semibold text-lg">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
        <div className="w-[289px] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#14162466]"></div>
          <Image
            src={"/photo1.png"}
            alt=""
            width={289}
            height={320}
            className="object-cover h-[320px] "
          />
          <div className="absolute bottom-[28px] right-[30.5px] left-[28.5px] flex flex-col gap-4  items-start">
            <p className="bg-[#4B6BFB] font-medium text-white text-xs leading-5 px-2.5 py-1 rounded-md inline-flex">
              Technology
            </p>
            <p className="text-white font-semibold text-lg">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
        <div className="w-[289px] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#14162466]"></div>
          <Image
            src={"/photo1.png"}
            alt=""
            width={289}
            height={320}
            className="object-cover h-[320px] "
          />
          <div className="absolute bottom-[28px] right-[30.5px] left-[28.5px] flex flex-col gap-4  items-start">
            <p className="bg-[#4B6BFB] font-medium text-white text-xs leading-5 px-2.5 py-1 rounded-md inline-flex">
              Technology
            </p>
            <p className="text-white font-semibold text-lg">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
        <div className="w-[289px] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[#14162466]"></div>
          <Image
            src={"/photo1.png"}
            alt=""
            width={289}
            height={320}
            className="object-cover h-[320px] "
          />
          <div className="absolute bottom-[28px] right-[30.5px] left-[28.5px] flex flex-col gap-4  items-start">
            <p className="bg-[#4B6BFB] font-medium text-white text-xs leading-5 px-2.5 py-1 rounded-md inline-flex">
              Technology
            </p>
            <p className="text-white font-semibold text-lg">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

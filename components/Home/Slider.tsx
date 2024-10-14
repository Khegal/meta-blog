import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full flex flex-col gap-[11px] my-[100px]">
      <div className="relative">
        <Image
          alt="gg"
          src="/gg.jpeg"
          width={1216}
          height={600}
          className="object-cover h-[600px] rounded-xl shadow-custom"
        />
        <div className="bg-white p-10 w-[598px] gap-6 flex flex-col absolute bottom-[13px] left-[11px] border-[1px] border-borderColor2 rounded-xl">
          <div className="flex flex-col gap-4">
            <p className="bg-voiletishBlue w-[97px] text-center text-white py-1 px-[10px] rounded-md font-medium text-sm">
              Technology
            </p>
            <h1 className="font-semibold text-4xl text-textColor2">
              Grid system for better Design User Interface
            </h1>
          </div>
          <p className="text-textGrayColor">August 20, 2022</p>
        </div>
      </div>
      <div className="flex justify-end w-full gap-[25px]">
        <button className="border-borderColor border-[1px] border-px w-10 h-10 rounded-md flex justify-center items-center">
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 16L1 8.5L8.5 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="border-borderColor border-[1px] border-px w-10 h-10 rounded-md flex justify-center items-center">
          <svg
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L8.5 8.5L1 16"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;

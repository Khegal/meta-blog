import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <Image
        alt="gg"
        src="/gg.jpeg"
        width={1216}
        height={600}
        className="object-cover"
      />
    </div>
  );
};

export default Slider;

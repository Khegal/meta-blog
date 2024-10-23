const ContactUsForm = () => {
  return (
    <div className="pl-[35px] pt-[29px] pr-[130px] pb-[26px] bg-bgColor flex flex-col gap-6">
      <h5 className="font-semibold text-lg leading-[26px] text-black">
        Leave a Message
      </h5>
      <form className="flex flex-col gap-[29px] items-start">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-[21px]">
            <div className="flex gap-7">
              <input
                type="text"
                className="w-[225px] text-[#97989F] placeholder:text-[#97989F] pt-[5px] pl-[18px] leading-[26px] border border-[#DCDDDF] rounded-[5px] pb-[7px]"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="w-[225px] text-[#97989F] placeholder:text-[#97989F] pt-[5px] pl-[18px] leading-[26px] border border-[#DCDDDF] rounded-[5px] pb-[7px]"
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              className="w-full text-[#97989F] placeholder:text-[#97989F] py-[5.5px] pl-5 pr[50px] leading-[26px] border border-[#DCDDDF] rounded-[5px]"
              placeholder="Your Subject"
            />
          </div>
          <input
            type="text"
            className="w-full text-[#97989F] placeholder:text-[#97989F] py-[5.5px] pl-5 pr[50px] leading-[26px] border border-[#DCDDDF] rounded-[5px] h-[134px]"
            placeholder="Write a Message"
          />
        </div>
        <button className="bg-voiletishBlue inline-flex  px-4 py-2.5 rounded-md font-medium text-sm text-white">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;

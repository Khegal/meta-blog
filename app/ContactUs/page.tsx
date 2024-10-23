import ContactUsForm from "@/components/ContactUs/ContactForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-[100px]">
      <div className="flex w-[895px] flex-col justify-center">
        <div className="w-full flex flex-col justify-center items-center pt-[14px] pb-[39px] gap-[30px]">
          <div className="flex w-[624px] flex-col gap-5">
            <h3 className="font-semibold text-4xl text-black">Contact us</h3>
            <p className="text-borderColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-[50px] py-2.5">
            <div className="w-[294px] flex flex-col gap-2.5 pt-4 pl-4 pr-[18px] pb-[15px] border border-borderColor2 rounded-xl">
              <h4 className="font-semibold text-2xl leading-10 text-black">
                Address
              </h4>
              <p className="text-lg leading-7 text-borderColor">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-[294px] flex flex-col gap-2.5 pt-4 pl-4 pr-[18px] pb-[15px] border border-borderColor2 rounded-xl">
              <h4 className="font-semibold text-2xl leading-10 text-black">
                Contact
              </h4>
              <p className="text-lg leading-7 text-borderColor">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactUsForm></ContactUsForm>
    </div>
  );
};

export default ContactUs;

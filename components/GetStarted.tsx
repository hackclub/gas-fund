import Tilt from "react-parallax-tilt";

export const GetStarted = () => {
  return (
    <div>
      <div className="p-4 md:p-8 md:pt-16 max-w-6xl mx-auto relative">
        <h1 className="text-white font-black text-xl md:text-4xl lg:text-5xl leading-none">
          Get Started
        </h1>
        <div>
          <p className="mt-4 font-light text-white text-left text-lg md:text-xl  w-full mx-auto">
            Whether you have gone or are going to a hackathon, let’s get you set
            up and ready to go with Gas Fund. Fill out the fields below so the
            team can contact you with more information.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col  space-y-2">
          <input
            type="text"
            placeholder={"Name"}
            className="bg-[#01735C] py-1 text-xl md:text-[4vw] leading-tight font-black text-white rounded-md uppercase tracking-tight px-2"
          />
          <input
            type="text"
            placeholder={"Email"}
            className="bg-[#01735C] py-1 text-xl  md:text-[4vw] leading-tight font-black text-white rounded-md uppercase tracking-tight px-2"
          />
        </div>
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          gyroscope
          className="mt-3"
          glareEnable
        >
          <button className=" text-3xl font-bold rounded-md w-full p-[1px]  bg-[#FFA600]    text-black uppercase">
            <div className="p-2 border-[3px] border-black rounded-md flex justify-center items-center">
              GO
            </div>
          </button>
        </Tilt>
      </div>
    </div>
  );
};

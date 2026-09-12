import Tilt from "react-parallax-tilt";

export const GetStarted = () => {
  return (
    <div id="signup">
      <div className="p-4 md:p-8 md:pt-16 max-w-6xl mx-auto relative">
        <h1 className="text-white font-black text-xl md:text-4xl lg:text-5xl leading-none">
          Gas Fund has ended
        </h1>
        <p className="mt-4 font-light text-white text-left text-lg md:text-xl w-full mx-auto">
          We're no longer accepting applications for Gas Fund, but you can find your next adventure
          at{" "}
          <a
            href="https://hackclub.com/programs"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold"
          >
            hackclub.com/programs
          </a>
          !
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-0">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Name"
            disabled
            className="bg-[#01735C] py-1 text-xl md:text-[3vw] leading-tight font-black text-white rounded-md uppercase tracking-tight px-2 opacity-50 cursor-not-allowed"
          />
          <input
            type="email"
            placeholder="Email"
            disabled
            className="bg-[#01735C] py-1 text-xl md:text-[3vw] leading-tight font-black text-white rounded-md uppercase tracking-tight px-2 opacity-50 cursor-not-allowed"
          />
        </div>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope className="mt-3">
          <button
            type="button"
            disabled
            className="text-3xl font-bold rounded-md w-full p-px bg-[#FFA600] text-black uppercase opacity-50 cursor-not-allowed"
          >
            <div className="p-2 border-[3px] border-black rounded-md flex justify-center items-center">
              Applications closed
            </div>
          </button>
        </Tilt>
      </div>
    </div>
  );
};

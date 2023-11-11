import { useRouter } from "next/router";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export const GetStarted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  return (
    <div id="signup">
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
            onInput={(e) => {
              setName((e.target as HTMLTextAreaElement).value);
            }}
            placeholder={"Name"}
            className="bg-[#01735C] py-1 text-xl md:text-[3vw] leading-tight font-black text-white rounded-md uppercase tracking-tight px-2"
          />
          <input
            type="text"
            placeholder={"Email"}
            onInput={(e) => {
              setEmail((e.target as HTMLTextAreaElement).value);
            }}
            className="bg-[#01735C] py-1 text-xl  md:text-[3vw] leading-tight font-black text-white rounded-md uppercase tracking-tight px-2"
          />
        </div>
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          gyroscope
          className="mt-3"
          glareEnable
        >
          <button
            onClick={() => {
              router.push(
                `https://airtable.com/appl0Cy5w1E1HzAkm/shrFj5GqEgPStPghl?prefill_Name=${encodeURIComponent(
                  name
                )}&prefill_Email=${encodeURIComponent(email)}`
              );
            }}
            className=" text-3xl font-bold rounded-md w-full p-[1px]  bg-[#FFA600]    text-black uppercase"
          >
            <div className="p-2 border-[3px] border-black rounded-md flex justify-center items-center">
              GO
            </div>
          </button>
        </Tilt>
      </div>
    </div>
  );
};

import Image from "next/image";

export const StepOne = () => {
  return (
    <div className="aspect-[3/2] bg-center rounded-xl relative">
      <Image src="/hackathon.png" alt="Hackathon event" fill className="bg-cover rounded-xl object-cover" />

      <Image
        src="/stepone.png"
        alt="Step 1"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-[20%] p-[3%]"
      />
      <span className="font-bold text-white xl:text-6xl text-[10vw] md:text-[4vw] leading-none bottom-0 absolute right-0 p-[3%] m-0 text-right">
        Attend a hackathon
      </span>
    </div>
  );
};

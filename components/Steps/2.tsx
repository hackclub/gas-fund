import Image from "next/image";

export const StepTwo = () => {
  return (
    <div className="aspect-3/2 bg-center rounded-xl relative">
      <Image src="/selfie.png" alt="Selfie at hackathon" fill sizes="(max-width: 768px) 100vw, 50vw" className="bg-cover rounded-xl object-cover" />

      <Image
        src="/steptwo.png"
        alt="Step 2"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-[20%] p-[3%]"
      />
      <span className="font-bold text-white xl:text-6xl text-[10vw] md:text-[4vw] leading-none bottom-0 absolute right-0 p-[3%] m-0 text-right">
        Snap some <br /> selfies
      </span>
    </div>
  );
};

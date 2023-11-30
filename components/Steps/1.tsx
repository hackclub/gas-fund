export const StepOne = () => {
  return (
    <div className="aspect-[3/2] bg-center rounded-xl relative">
      <img src="/hackathon.png" className="bg-cover w-full h-full rounded-xl" />

      <img
        src="/stepone.png"
        className="absolute top-0 left-0 w-[20%] p-[3%]"
      />
      <span className="font-bold text-white xl:text-6xl text-[10vw] md:text-[4vw] leading-none bottom-0 absolute right-0 p-[3%] m-0 text-right">
        Attend a hackathon
      </span>
    </div>
  );
};

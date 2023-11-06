export const StepTwo = () => {
  return (
    <div className="aspect-[3/2] bg-center rounded-xl relative">
      <img src="/selfie.png" className="bg-cover w-full h-full rounded-xl" />

      <img
        src="/steptwo.png"
        className="absolute top-0 left-0 w-[20%] p-[3%]"
      />
      <span className="font-bold  text-white xl:text-6xl text-[10vw] md:text-[4vw]  leading-none bottom-0 absolute right-0 p-[3%] m-0 text-right">
        Snap some <br /> selfies
      </span>
    </div>
  );
};

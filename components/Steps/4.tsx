export const StepFour = () => {
  return (
    <div className="aspect-[3/2] bg-center rounded-xl relative">
      <img
        src="/reimbursement.png"
        className="bg-cover w-full h-full rounded-xl"
      />

      <img
        src="/stepfour.png"
        className="absolute top-0 left-0 w-[20%] p-[3%]"
      />
      <span className="font-bold xl:text-6xl text-[10vw] md:text-[4vw]  text-white  leading-none bottom-0 absolute right-0 p-[3%] m-0 text-right">
        Receive a <br /> reimbursement
      </span>
    </div>
  );
};

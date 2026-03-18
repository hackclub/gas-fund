import Image from "next/image";

export const StepFour = () => {
  return (
    <div className="aspect-[3/2] bg-center rounded-xl relative">
      <Image
        src="/reimbursement.png"
        alt="Reimbursement"
        fill
        className="bg-cover rounded-xl object-cover"
      />

      <Image
        src="/stepfour.png"
        alt="Step 4"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-[20%] p-[3%]"
      />
      <span className="font-bold xl:text-6xl text-[10vw] md:text-[4vw]  text-white  leading-none bottom-0 absolute right-0 p-[3%] m-0 text-right">
        Receive a <br /> reimbursement
      </span>
    </div>
  );
};

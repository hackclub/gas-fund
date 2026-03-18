import Image from "next/image";

export const Explanation = () => {
  return (
    <div className="relative">
      <div
        // bg-[url('/supportrail.svg')]
        className="my-[5vh]  w-full flex items-center justify-center bg-repeat-x bg-cover "
        style={{
          backgroundSize: "auto 100%",
        }}
      >
        <Image
          src="/lighttext.svg"
          alt="Light text sign"
          width={600}
          height={240}
          className=" mx-auto max-h-60 w-auto scale-y-100 mt-2"
        />
      </div>

      <div>
        <Image
          src="/assemble.png"
          alt="Assemble hackathon"
          width={800}
          height={600}
          className="mx-auto -rotate-2 w-full md:w-[60%] mb-[6vh]"
        />
        <p className="font-light text-white text-center text-lg md:text-2xl px-6 w-full md:w-3/4 mx-auto">
          We{" "}
          <a href="https://hackclub.com" target="_blank">
            (Hack Club)
          </a>{" "}
          want more people to be able to go to hackathons. This school year,
          we&apos;ll fund the cost of gas for you (or a parent) to drive to{" "}
          <span className="font-bold">
            any hackathon listed on{" "}
            <a
              href="https://hackathons.hackclub.com"
              target="_blank"
              className="underline"
            >
              hackathons.hackclub.com
            </a>
          </span>
          . We&apos;ll alternatively reimburse you the equivalent of that if you buy
          a train or bus ticket.
        </p>
      </div>
    </div>
  );
};

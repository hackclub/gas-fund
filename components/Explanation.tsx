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
        <img
          src="/lightsign.svg"
          className=" mx-auto max-h-[15rem] scale-y-[95%] mt-2 w-[80%]"
        />
        <img
          src="/lightsign.svg"
          className="absolute max-h-[15rem] mx-auto opacity-0"
        />
      </div>

      <div>
        <img
          src="/assemble.png"
          className="mx-auto w-full md:w-[60%] mb-[4vh]"
        />
        <p className="font-light text-white text-center text-lg md:text-2xl px-6 w-full md:w-3/4 mx-auto">
          We{" "}
          <a href="https://hackclub.com" target="_blank">
            (Hack Club)
          </a>{" "}
          want more people to be able to go to hackathons. This school year,
          we'll fund the cost of gas for you (or a parent) to drive to{" "}
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
          . We'll alternatively reimburse you the equivalent of that if you buy
          a train or bus ticket.
        </p>
      </div>
    </div>
  );
};

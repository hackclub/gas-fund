export const TrainsAndBuses = () => {
  return (
    <div>
      <div className="p-4 md:p-8 md:pt-16 max-w-6xl mx-auto relative">
        <h1 className="text-white font-black text-xl md:text-4xl lg:text-5xl leading-none">
          Trains & Buses?
        </h1>
        <div>
          <p className="mt-4 font-light text-white text-left text-lg md:text-xl  w-full mx-auto">
            Gas Fund reaches to extend the joy of hackathons to as many people,
            in an easy and accessible way. If you are unable to drive to a
            hackathon, we can reimburse the equivalent amount of miles for a
            bus/train ticket.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {/* <div className="flex mx-auto border border-red-500 w-[50vw] relative ">
          <img src="/bus.png" className="h-auto w-auto absolute" />
          <img
            src="/amtrak.png"
            className="rotate-[8deg] scale-90 absolute left-1/2"
          />
        </div> */}
        <img
          src="/busntrain.png"
          className="px-6 md:px-0 w-full max-w-6xl md:w-[70vw]"
        />
      </div>
    </div>
  );
};

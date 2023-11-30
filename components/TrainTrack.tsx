import { motion } from "framer-motion";

export const TrainTrack = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <div style={{ zIndex: 99 }} className="relative">
        <div className="train relative">
          <img
            src="/traincoachlong2.png"
            className="h-[10vh] w-auto object-cover overflow-visible translate-y-[10%] "
          />
        </div>
        {/* <img src="/coach.svg" className="-translate-x-[4%] translate-y-[9%]" /> */}
      </div>

      <div
        style={{ zIndex: 20 }}
        className="bg-repeat-x bg-[url('/track.svg')] relative"
      >
        <img src="/track.svg" className="opacity-0 h-full" />
      </div>
    </div>
  );
};

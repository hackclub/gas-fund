import Image from "next/image";

export const TrainTrack = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <div style={{ zIndex: 99 }} className="relative">
        <div className="train relative">
          <Image
            src="/traincoachlong2.svg"
            alt="Train coach"
            width={800}
            height={100}
            className="h-[10vh] w-auto object-cover overflow-visible translate-y-[10%] "
          />
        </div>
      </div>

      <div
        style={{ zIndex: 20 }}
        className="bg-repeat-x bg-[url('/track.svg')] relative"
      >
        <Image src="/track.svg" alt="" width={800} height={50} className="opacity-0 h-full w-auto" />
      </div>
    </div>
  );
};

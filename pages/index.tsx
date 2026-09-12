import { EasterEgg } from "@/components/EasterEgg";
import { Explanation } from "@/components/Explanation";
import Footer from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { TrainTrack } from "@/components/TrainTrack";
import { TrainsAndBuses } from "@/components/TrainsAndBuses";
import Works from "@/components/Works";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gas Fund</title>
      </Head>
      <div className="overflow-x-hidden">
        <div className="fixed top-0 z-600 flex min-h-18 w-full items-center justify-center bg-[#FFA600] px-4 py-2 text-center font-bold text-black">
          Gas Fund has ended, but you can find your next adventure at{" "}
          <a
            href="https://hackclub.com/programs"
            target="_blank"
            rel="noreferrer"
            className="ml-1 underline"
          >
            hackclub.com/programs
          </a>
          !
        </div>
        <Nav />
        <Hero />
        <Explanation />

        <Image
          src="/roadbanner.svg"
          alt="Road banner"
          width={1920}
          height={200}
          className="w-full my-[5vh]"
        />
        <Works />
        <div className="mt-2">
          <TrainTrack />
        </div>
        <TrainsAndBuses />

        <div className="border-t-[3px] border-gray-100 mt-8 pt-4 border-dotted">
          <GetStarted />
        </div>
        <Footer />
        <EasterEgg />
      </div>
    </>
  );
}

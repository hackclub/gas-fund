import Image from "next/image";
import Tilt from "react-parallax-tilt";

export const Hero = () => {
  return (
    <div className="h-[90vh] relative">
      <Image
        src="/bgroad.jpg"
        alt="Road background"
        fill
        className="object-cover"
        style={{ zIndex: -99 }}
        priority
      />

      <div className="flex w-full h-full justify-center items-center">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          <Image
            src="/highwaybadge.svg"
            alt="Gas Fund highway badge"
            width={800}
            height={500}
            className="h-[50vh] w-auto lg:max-w-[50rem] px-8"
            priority
          />
        </Tilt>
      </div>
    </div>
  );
};

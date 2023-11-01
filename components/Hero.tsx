import Tilt from "react-parallax-tilt";

export const Hero = () => {
  return (
    <div className="h-[90vh] relative">
      <img
        src="/bgroad.jpg"
        className="w-full h-full absolute object-cover"
        style={{ zIndex: -99 }}
      />

      <div className="flex w-full h-full justify-center items-center">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          <img src="/highwaysign.svg" className="h-[50vh]" />
        </Tilt>
      </div>
    </div>
  );
};

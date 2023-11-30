import { StepOne } from "./Steps/1";
import { StepTwo } from "./Steps/2";
import { StepThree } from "./Steps/3";
import { StepFour } from "./Steps/4";
import Tilt from "react-parallax-tilt";

const Works = () => {
  return (
    <div className="px-6 md:px-20 py-8 ">
      {/* <div className="text-white text-left mb-3 text-8xl font-black">
        Here’s how it works
      </div> */}
      <div className="grid grid-cols-1  gap-12 max-w-6xl mx-auto md:grid-cols-2">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          <StepOne />
        </Tilt>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          <StepTwo />
        </Tilt>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          {" "}
          <StepThree />
        </Tilt>
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} gyroscope>
          <StepFour />
        </Tilt>
      </div>
    </div>
  );
};

export default Works;

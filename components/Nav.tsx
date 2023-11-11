import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Nav = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      // Adjust these values according to your design preferences
      const threshold = 0.2;
      const opacityThreshold = 0.8;

      if (latest > threshold) {
        const opacity = Math.min((latest - threshold) / opacityThreshold, 1);
        const blur = Math.min((latest - threshold) / 0.2, 1);

        controls.start({
          background: `rgba(0, 0, 0, 0.6)`,
          borderBottom: `0.1px solid rgba(255, 255, 255, 0.3)`, // Adjust the color if needed
          backdropFilter: `blur(${10 * blur}px)`,
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({
          background: "rgba(0, 0, 0, 0)",
          borderBottom: `0px solid rgba(255, 255, 255, 0.3)`, // Adjust the color if needed
          backdropFilter: "blur(0)",
          transition: { duration: 0.5 },
        });
      }
    });
  }, []);

  return (
    <motion.div
      id="nav"
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        position: "fixed",
        top: 0,
        zIndex: 599,
        width: "100%",
        display: "flex",
        opacity: 1,
      }}
      className="px-4 py-3 text-beige"
      animate={controls}
    >
      <div className="w-full flex items-center justify-between">
        <a href="https://hackclub.com" target="_blank">
          <img
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            className="-top-2 left-4 hover:rotate-12 origin-top-left transition ease-in-out absolute w-36"
          />
        </a>
        <a
          href="#signup"
          className="no-underline bg-[#01735C] ease-in-out hover:bg-[#1c5549] text-white uppercase font-bold px-4 md:px-10 py-2 text-[1.3rem] tracking-wide rounded-md bg-accent-default  transition duration-100   text-beige"
        >
          Get Started
        </a>
      </div>
      {/* Additional elements if needed */}
    </motion.div>
  );
};

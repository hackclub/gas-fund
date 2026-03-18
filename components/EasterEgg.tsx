import Image from "next/image";

export const EasterEgg = () => {
  return (
    <div className="group overflow-hidden">
      <Image
        src="/gasicon.svg"
        alt="Gas Fund icon"
        width={144}
        height={144}
        className="w-36 h-auto translate-y-12 rotate-12 group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out"
      />
    </div>
  );
};

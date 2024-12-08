import { Boxes } from "../ui/Boxes";

export const Background = () => {
  return (
    <div className="h-80 relative w-full overflow-hidden bg-[#1a1a1a] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
    </div>
  );
};
import { Card } from "./card";
import { Desc } from "./desc";

export const Project = ({ projectRef }: { projectRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div ref={projectRef} className="flex flex-col py-10 px-10 md:px-32 lg:px-60">
      <Desc />
      <Card />
    </div>
  );
};

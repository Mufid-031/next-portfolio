import { Card } from "./card";
import { Desc } from "./desc";

export const Project = () => {
  return (
    <div className="flex flex-col py-10 px-10 md:px-32 lg:px-60">
      <Desc />
      <Card />
    </div>
  );
};

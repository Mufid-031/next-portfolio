"use client";

import Lottie from "react-lottie";
import globe from "../../lottie/globe.json";

export const Globe = () => {
  return (
    <Lottie
      style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      options={{
        loop: true,
        autoplay: true,
        animationData: globe,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={150}
      width={150}
    />
  );
};

import React, { useMemo } from "react";

const MinorHeader = ({ route }: { route: string }) => {
  const refine = useMemo(() => {
    if (route.includes("headphones")) {
      return "headphones";
    }
    if (route.includes("speakers")) {
      return "speakers";
    }
    if (route.includes("earphones")) {
      return "earphones";
    }
  }, [route]);
  return (
    <div className="py-8 md:py-24 md:text-[40px] bg-red-400 text-center uppercase font-bold text-[28px]">
      {refine}
    </div>
  );
};

export default MinorHeader;

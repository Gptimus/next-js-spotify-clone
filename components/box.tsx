import { BoxProps } from "@/types";
import React from "react";

import { twMerge } from "tailwind-merge";

export const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};

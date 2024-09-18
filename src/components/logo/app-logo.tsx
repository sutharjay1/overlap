"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className, width = 276, height = 40 }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        // src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
        src="/logo.svg"
        alt="Overlap"
        className={cn("mx-auto", className)}
        draggable={false}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;

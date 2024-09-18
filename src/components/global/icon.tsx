"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Icon = () => {
  return (
    <motion.div
      initial={{
        rotate: -12,
        x: "-4rem",
        scale: 1.0,
      }}
      whileHover={{
        rotate: 12,
        x: "-70px",
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="absolute left-12 top-20 mx-auto h-fit w-fit max-w-md sm:left-6 sm:top-24 md:left-2 md:top-[8.8rem] lg:left-0 lg:top-[6.2rem]"
    >
      <Image
        src="/logo.avif"
        alt="logo"
        className="h-[8rem] w-[8rem] object-contain md:h-[20rem] md:w-[20rem] lg:h-[16rem] lg:w-[16rem]"
        width={200}
        height={200}
        draggable={false}
      />
    </motion.div>
  );
};

export default Icon;

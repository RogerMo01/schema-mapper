import { motion } from "motion/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Badge({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="flex h-20 rounded-lg text-white justify-center items-center bg-blue-500"
    >
      {children}
    </motion.div>
  );
}

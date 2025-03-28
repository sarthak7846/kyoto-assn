import { motion } from "motion/react";

export const MessageContent = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-slate-800 max-w-fit px-7 py-4 text-2xl rounded-xl my-12 ml-16"
    >
      {message}
    </motion.div>
  );
};

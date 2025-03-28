import { motion } from "motion/react";
import { convertTimestampToIST } from "../utils/timeConverter";

export const MessageContent = ({
  message,
  time,
}: {
  message: string;
  time: string;
}) => {
  const newTime = convertTimestampToIST(time);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-slate-800 max-w-fit px-7 py-4 text-2xl rounded-xl my-12 ml-16"
    >
      {message}
      <span className="text-sm relative left-5 top-4 text-gray-500">
        {newTime}
      </span>
    </motion.div>
  );
};

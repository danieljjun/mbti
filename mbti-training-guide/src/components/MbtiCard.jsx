import React from "react";
import { motion } from "framer-motion";

export default function MbtiCard({ data, onClick }) {
  const colorClasses = {
    NTP: "bg-purple-200",
    NFP: "bg-green-200",
    STJ: "bg-blue-200",
    SFP: "bg-orange-200"
  };
  const groupKey = data.code[1] + data.code[2]; // 간단 그룹 판별

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${colorClasses[groupKey] || "bg-slate-200"} rounded-2xl shadow-md p-4 cursor-pointer`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-1">{data.code}</h3>
      <p className="text-sm text-gray-600 leading-snug">{data.title}</p>
    </motion.div>
  );
}
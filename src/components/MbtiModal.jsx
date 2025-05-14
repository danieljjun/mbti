import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MbtiModal({ open, onClose, data }) {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-2xl p-6 max-w-lg w-full overflow-y-auto max-h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-3 right-4 text-xl" onClick={onClose}>×</button>
          <h2 className="text-2xl font-bold mb-2">{data.code} – {data.title}</h2>
          <p className="mb-4 text-gray-700">{data.summary}</p>
          <h3 className="font-semibold">동기 트리거</h3>
          <ul className="list-disc pl-5 text-sm mb-3">
            {data.triggers.map((t) => (<li key={t}>{t}</li>))}
          </ul>
          <h3 className="font-semibold">주의 함정</h3>
          <ul className="list-disc pl-5 text-sm mb-3">
            {data.pitfalls.map((p) => (<li key={p}>{p}</li>))}
          </ul>
          {/* 기타 섹션 추가 … */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
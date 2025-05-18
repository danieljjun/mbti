import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MbtiModal({ open, data, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-3 right-4 text-xl" onClick={onClose}>
            ×
          </button>

          <h2 className="text-2xl font-bold mb-2">
            {data.code} – {data.title}
          </h2>
          <p className="mb-4 text-gray-700">{data.summary}</p>

          <Section title="동기 트리거" items={data.triggers} />
          <Section title="주의 함정" items={data.pitfalls} />
          <KV label="최적 훈련" value={data.bestTraining} />
          <KV label="업셀 포인트" value={data.upsell} />

          <h3 className="font-semibold mt-4">큐 &amp; 금기어</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              <b>Demo </b>— {data.cues.demo}
            </li>
            <li>
              <b>Fix </b>— {data.cues.fix}
            </li>
            <li>
              <b>Motivate </b>— {data.cues.motivate}
            </li>
            <li className="text-red-600">
              <b>⛔ </b>
              {data.taboo}
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── 헬퍼 컴포넌트 ───────────────────────── */
function Section({ title, items }) {
  return (
    <>
      <h3 className="font-semibold">{title}</h3>
      <ul className="list-disc pl-5 text-sm mb-3">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
}

function KV({ label, value }) {
  return (
    <p className="text-sm mb-2">
      <b>{label}: </b>
      {value}
    </p>
  );
}

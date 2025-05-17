import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPage({ data, setData }) {
  const [text, setText] = useState(JSON.stringify(data, null, 2));
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const save = () => {
    try {
      const parsed = JSON.parse(text);
      localStorage.setItem("mbtiData", JSON.stringify(parsed));
      setData(parsed);
      setErr("");
      alert("저장 완료! 홈으로 이동합니다.");
      navigate("/");
    } catch (e) {
      setErr("❌ JSON 오류: " + e.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">MBTI 데이터 편집</h1>
      <textarea
        className="w-full h-[60vh] p-3 border rounded font-mono text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {err && <p className="text-red-600 mt-2">{err}</p>}

      <div className="flex gap-4 mt-4">
        <button
          onClick={save}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          저장 & 적용
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("mbtiData");
            window.location.reload();
          }}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          로컬 변경 초기화
        </button>
      </div>
    </div>
  );
}

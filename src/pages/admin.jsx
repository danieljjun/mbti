import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin({ data, setData }) {
  const navigate = useNavigate();
  const [jsonText, setJsonText] = useState(JSON.stringify(data, null, 2));
  const [error, setError] = useState("");

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      localStorage.setItem("mbtiData", JSON.stringify(parsed));
      setData(parsed);
      setError("");
      alert("저장 완료! 홈에서 확인하세요.");
      navigate("/");
    } catch (e) {
      setError("❌ JSON 파싱 오류: " + e.message);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("mbtiData");
    window.location.reload();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">MBTI 데이터 편집(Admin)</h1>
      <textarea
        className="w-full h-[60vh] p-3 border rounded font-mono text-sm"
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
      />
      {error && <p className="text-red-600 mt-2">{error}</p>}

      <div className="flex gap-4 mt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          저장 & 적용
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          로컬 변경 초기화
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function EditPage({ data, setData }) {
  const nav = useNavigate();
  if (!auth.currentUser) return <p className="p-6">로그인 필요</p>;

  const [text, setText] = useState(JSON.stringify(data, null, 2));
  const [err, setErr] = useState("");

  const save = () => {
    try {
      const parsed = JSON.parse(text);
      localStorage.setItem("mbtiData", JSON.stringify(parsed));
      setData(parsed);
      nav("/");
    } catch (e) { setErr(e.message); }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col gap-3">
      <h1 className="text-2xl font-bold">데이터 편집(Admin)</h1>
      <textarea className="w-full h-[60vh] border p-2 font-mono text-sm"
        value={text} onChange={e=>setText(e.target.value)}/>
      {err && <p className="text-red-600">{err}</p>}
      <button className="bg-blue-600 text-white py-2 rounded" onClick={save}>저장</button>
    </div>
  );
}

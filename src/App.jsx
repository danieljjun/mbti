import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Instructor from "./pages/Instructor";
import Admin from "./pages/Admin";
import React, { useState } from "react";
import { mbtiData } from "./data/mbti";
import MbtiCard from "./components/MbtiCard";
import MbtiModal from "./components/MbtiModal";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = mbtiData.filter((i) =>
    i.code.toLowerCase().includes(keyword.toLowerCase()) ||
    i.title.includes(keyword)
  );

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">MBTI 퍼스널 트레이닝 매뉴얼</h1>
      <p className="text-sm text-gray-600 mb-6">Click a card to see your tailored coaching kit</p>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filtered.map((item) => (
          <MbtiCard key={item.code} data={item} onClick={() => setSelected(item)} />
        ))}
      </div>

      <MbtiModal open={!!selected} data={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
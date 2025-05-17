import React, { useState } from "react";
import { Link } from "react-router-dom";
import MbtiCard from "../components/MbtiCard";
import MbtiModal from "../components/MbtiModal";
import SearchBar from "../components/SearchBar";

export default function Home({ data }) {
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = data.filter(
    (i) =>
      i.code.toLowerCase().includes(keyword.toLowerCase()) ||
      i.title.includes(keyword)
  );

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">MBTI 퍼스널 트레이닝 매뉴얼</h1>
        <Link to="/edit" className="text-sm text-blue-600 underline">
          데이터 편집
        </Link>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Click a card to see your tailored coaching kit
      </p>
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

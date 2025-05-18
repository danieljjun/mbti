import React from "react";
export default function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      className="w-full md:w-80 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring"
      placeholder="Search MBTI…"
    />
  );
}
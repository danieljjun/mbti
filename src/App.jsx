import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { mbtiData as defaultData } from "./data/mbti";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";

export default function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("mbtiData")) || defaultData
  );

  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/edit" element={<EditPage data={data} setData={setData} />} />
    </Routes>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import MbtiCard from "../components/MbtiCard";
import MbtiModal from "../components/MbtiModal";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return <h1 style={{ padding: 24 }}>웹용 Home (임시)</h1>;
}
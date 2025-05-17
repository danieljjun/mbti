import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  return <h1 style={{ padding: 24 }}>웹용 Register (임시)</h1>;
}

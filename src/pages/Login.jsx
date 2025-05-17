import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  return <h1 style={{ padding: 24 }}>웹용 Login (임시)</h1>;
}

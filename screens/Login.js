import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import tw from "../tailwind";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  const emailLogin = () =>
    signInWithEmailAndPassword(auth, email, pw)
      .then(() => navigation.replace("Home"))
      .catch((e) => setErr(e.message));

  const googleLogin = () =>
    signInWithPopup(auth, googleProvider)
      .then(() => navigation.replace("Home"))
      .catch((e) => setErr(e.message));

  return (
    <View style={tw`flex-1 p-6 justify-center`}>
      <Text style={tw`text-2xl font-bold mb-4`}>로그인</Text>

      <TextInput
        style={tw`border p-2 rounded mb-2`}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        style={tw`border p-2 rounded mb-4`}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPw}
      />

      {err ? <Text style={tw`text-red-600 mb-2`}>{err}</Text> : null}

      <Pressable style={tw`bg-blue-600 p-3 rounded mb-2`} onPress={emailLogin}>
        <Text style={tw`text-white text-center`}>이메일 로그인</Text>
      </Pressable>

      <Pressable style={tw`bg-red-500 p-3 rounded`} onPress={googleLogin}>
        <Text style={tw`text-white text-center`}>Google 로그인</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={tw`text-blue-600 mt-4 text-center`}>회원가입</Text>
      </Pressable>
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import tw from "../tailwind";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  const signup = () =>
    createUserWithEmailAndPassword(auth, email, pw)
      .then(() => navigation.replace("Home"))
      .catch((e) => setErr(e.message));

  return (
    <View style={tw`flex-1 p-6 justify-center`}>
      <Text style={tw`text-2xl font-bold mb-4`}>회원가입</Text>
      <TextInput style={tw`border p-2 rounded mb-2`} placeholder="Email" onChangeText={setEmail}/>
      <TextInput style={tw`border p-2 rounded mb-4`} placeholder="Password" secureTextEntry onChangeText={setPw}/>
      {err && <Text style={tw`text-red-600 mb-2`}>{err}</Text>}
      <Pressable style={tw`bg-blue-600 p-3 rounded`} onPress={signup}>
        <Text style={tw`text-white text-center`}>계정 만들기</Text>
      </Pressable>
    </View>
  );
}

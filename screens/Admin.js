import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "../tailwind";
import { auth } from "../firebase";

export default function Admin({ route, navigation }) {
  const { data, setData } = route.params;   // App.js에서 params 전달
  const [text, setText] = useState(JSON.stringify(data, null, 2));
  const [err, setErr] = useState("");

  if (!auth.currentUser) return <Text style={tw`p-6`}>로그인 필요.</Text>;

  const save = () => {
    try {
      const parsed = JSON.parse(text);
      AsyncStorage.setItem("mbtiData", JSON.stringify(parsed));
      setData(parsed);
      navigation.goBack();
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <View style={tw`flex-1 p-4`}>
      <Text style={tw`text-2xl font-bold mb-2`}>데이터 편집(Admin)</Text>
      <TextInput
        style={tw`border p-2 font-mono h-[70%] rounded`}
        multiline
        value={text}
        onChangeText={setText}
      />
      {err ? <Text style={tw`text-red-600`}>{err}</Text> : null}
      <Pressable style={tw`bg-blue-600 p-3 rounded mt-3`} onPress={save}>
        <Text style={tw`text-white text-center`}>저장</Text>
      </Pressable>
    </View>
  );
}

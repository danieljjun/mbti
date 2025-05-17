import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Picker } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebase";
import tw from "../tailwind";

export default function Instructor() {
  const user = auth.currentUser;
  const key = `coach:${user?.uid}`;

  const [form, setForm] = useState({
    name: "", speciality: "", mbti: "INFJ", intro: ""
  });

  useEffect(() => {
    AsyncStorage.getItem(key).then((json) => {
      if (json) setForm(JSON.parse(json));
    });
  }, []);

  const save = () => {
    AsyncStorage.setItem(key, JSON.stringify(form));
    alert("저장되었습니다!");
  };

  if (!user) return <Text style={tw`p-6`}>로그인 후 이용.</Text>;

  return (
    <View style={tw`flex-1 p-6`}>
      <Text style={tw`text-2xl font-bold mb-4`}>강사 프로필</Text>

      <TextInput style={tw`border p-2 rounded mb-2`} placeholder="이름" value={form.name}
        onChangeText={(v) => setForm({ ...form, name: v })} />

      <TextInput style={tw`border p-2 rounded mb-2`} placeholder="전문 분야" value={form.speciality}
        onChangeText={(v) => setForm({ ...form, speciality: v })} />

      <Picker
        selectedValue={form.mbti}
        style={tw`border mb-2`}
        onValueChange={(v) => setForm({ ...form, mbti: v })}
      >
        {["ISTJ","ISFJ","INFJ","INTJ","ISTP","ISFP","INFP","INTP",
          "ESTP","ESFP","ENFP","ENTP","ESTJ","ESFJ","ENFJ","ENTJ"]
          .map((m) => <Picker.Item label={m} value={m} key={m} />)}
      </Picker>

      <TextInput
        style={tw`border p-2 rounded h-32 mb-4`}
        multiline
        placeholder="소개"
        value={form.intro}
        onChangeText={(v) => setForm({ ...form, intro: v })}
      />

      <Pressable style={tw`bg-blue-600 p-3 rounded`} onPress={save}>
        <Text style={tw`text-white text-center`}>저장</Text>
      </Pressable>
    </View>
  );
}

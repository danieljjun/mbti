import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Modal } from "react-native";
import tw from "../tailwind";
import mbtiData from "../data/mbti";
import { auth } from "../firebase";

export default function Home({ navigation, user }) {
  const [sel, setSel] = useState(null);

  const Card = ({ item }) => (
    <Pressable
      style={tw`flex-1 m-1 p-4 bg-gray-200 rounded-2xl`}
      onPress={() => setSel(item)}
    >
      <Text style={tw`text-xl font-bold`}>{item.code}</Text>
      <Text>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={tw`flex-1 p-4`}>
      {/* 헤더 */}
      <View style={tw`flex-row justify-between items-center mb-3`}>
        <Text style={tw`text-2xl font-bold`}>MBTI PT 매뉴얼</Text>
        <Pressable
          onPress={() =>
            user ? navigation.navigate("Instructor") : navigation.navigate("Login")
          }
        >
          <Text style={tw`text-blue-600`}>
            {user ? "프로필" : "로그인"}
          </Text>
        </Pressable>
      </View>

      {/* 그리드 */}
      <FlatList
        data={mbtiData}
        keyExtractor={(i) => i.code}
        numColumns={2}
        renderItem={Card}
      />

      {/* 모달 */}
      <Modal
        visible={!!sel}
        animationType="slide"
        onRequestClose={() => setSel(null)}
      >
        {sel && (
          <View style={tw`flex-1 p-4`}>
            <Pressable onPress={() => setSel(null)}>
              <Text style={tw`text-right text-xl`}>✕</Text>
            </Pressable>
            <Text style={tw`text-2xl font-bold mb-2`}>
              {sel.code} – {sel.title}
            </Text>
            <Text>{sel.summary}</Text>

            <Text style={tw`mt-4 font-bold`}>Demo 큐</Text>
            <Text>{sel.cues.demo}</Text>

            <Text style={tw`mt-2 font-bold`}>Fix 큐</Text>
            <Text>{sel.cues.fix}</Text>

            <Text style={tw`mt-2 font-bold`}>Motivate 큐</Text>
            <Text>{sel.cues.motivate}</Text>

            <Text style={tw`mt-2 text-red-600 font-bold`}>⛔ 금기어</Text>
            <Text style={tw`text-red-600`}>{sel.taboo}</Text>
          </View>
        )}
      </Modal>
    </View>
  );
}

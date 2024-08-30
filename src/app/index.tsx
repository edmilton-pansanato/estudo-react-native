import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1}} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>
      
    </ScrollView>
  );
}
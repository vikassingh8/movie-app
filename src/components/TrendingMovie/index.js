import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Carousal from "react-native-snap-carousel";
import MovieCard from "../MovieCard";

let { width } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  // console.log("Trending Movies", data);
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mt-2 mb-4 ">
      <View className="flex-row justify-between">
        <Text className="text-white text-lg font-bold mx-4 mb-4 ml-7">
          Now playing
        </Text>
      </View>

      {/* Carousal */}
      <Carousal
  data={data}
  renderItem={({ item }) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* You can customize this part based on your MovieCard component */}
      <MovieCard item={item} handleClick={handleClick} />
    </View>
  )}
  firstItem={1}
  inactiveSlideScale={0.86}
  inactiveSlideOpacity={0.6}
  sliderWidth={width}
  itemWidth={width * 0.8}
  slideStyle={{ display: "flex", alignItems: "center" }}
/>
    </View>
  );
}

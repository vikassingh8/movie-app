import React from "react";
import { Dimensions, TouchableWithoutFeedback, Image, View, Text, TouchableOpacity } from "react-native";
import { image500 } from "../../utils/moviesapi";

var { width, height } = Dimensions.get("window");

export default function MovieCard({ item, handleClick }) {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View>
        <Image
          source={{
            uri: image500(item.poster_path),
          }}
          style={{
            width: width * 0.8,
            height: height * 0.55,
          }}
          resizeMode="cover"
          className="rounded-lg"
        />
        
        {/* Display the movie name and Watch Trailer button */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ marginTop: 5, color: "white", fontWeight: "900", fontSize: 20 }}>
            {item.title}
          </Text>
          
          {/* Watch Trailer button */}
          <TouchableOpacity onPress={() => handleClick(item)}>
            <Text style={{ marginTop:5,color: "white", backgroundColor: "#eb5834", padding:6, borderRadius:10,fontWeight
            :"800" }}>
              Watch Trailer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

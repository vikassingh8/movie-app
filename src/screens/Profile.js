import { View, Image, Text } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
      <Text style={{ color: "white", marginTop: 110, textAlign: "center", fontWeight: "bold" }}>
        My Profile
      </Text>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            marginTop: 70,
            resizeMode: "cover",
          }}
        />
        <Text style={{ color: "white", marginTop: 20 }}>Vikas Singh</Text>
      </View>
    </View>
  );
};

export default Profile;

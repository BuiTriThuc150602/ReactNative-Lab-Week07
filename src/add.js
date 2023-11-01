import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const add = ({ navigation, route }) => {
    const usName = route.params.usName;
  navigation.setOptions({
    headerTitle: () => {
      return (
        <View style={{ flexDirection: "row", marginRight: 30 }}>
          <Image
            source={require("../assets/img/avt.png")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#171A1F",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {usName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#171A1F",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Have agrate day a head
            </Text>
          </View>
        </View>
      );
    },
    headerRight: () => {
        return(
            <>
            <Pressable onPress={()=>navigation.goBack()}><Ionicons name="arrow-back" style={{fontWeight: 700,marginRight:20}} size={25}/></Pressable>
            </>
        )
    },
  });
  return (
    <View>
      <Text>add</Text>
    </View>
  );
};

export default add;

const styles = StyleSheet.create({});

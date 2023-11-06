import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const Add = ({ navigation, route }) => {
  const usName = route.params.usName;
  const [title, setTitle] = useState("");
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
      return (
        <>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              style={{ fontWeight: 700, marginRight: 20 }}
              size={25}
            />
          </Pressable>
        </>
      );
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <View style={styles.inputContainer}>
        <Feather name="clipboard" size={24} color="green" />
        <TextInput
          style={styles.input}
          placeholder="input your job"
          onChangeText={(text) => {
            setTitle(text);
          }}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          if (title === "") return alert("Please input your job");
          else {
            fetch(
              "https://6540e47345bedb25bfc2d34b.mockapi.io/react-lab-todos/TodoList",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  name: usName,
                  title: title,
                }),
              }
            )
              .then((response) => response.json())
              .then((json) => {
                if (json != null)
                  setTimeout(() => {
                    navigation.goBack();
                  }, 800);
              })
              .catch((error) => console.error(error));
          }
        }}
      >
    
        <Text style={{color: "#FFFFFF",}}>FINISH</Text>
        <Ionicons
          name="arrow-forward"
          size={22}
          color={"white"}
          style={{ marginLeft: 10 }}
        />
      </Pressable>
      <Image
        style={styles.logo}
        source={require("../assets/img/logoApp.png")}
      />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9095A0",
    color: "#9095A0",
  },
  input: {
    marginLeft: 10,
    padding: 10,
    width: 345,
    height: 45,
    borderColor: "#9095A0",
  },
  button: {
    width: 190,
    height: 44,
    backgroundColor: "#00BDD6",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    width: 271,
    height: 271,
    marginTop: 40,
  },
});

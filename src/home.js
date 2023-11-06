import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  const [usName, setUsName] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/img/logoApp.png")}
      />
      <Text style={styles.title}>
        MANAGER YOUR TASK
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        onChangeText={(text) => {
          console.log(text);
          setUsName(text);
        }}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Todos", { usName: usName })}
      >
        <Text style={{color: "#FFFFFF",}}>GET STARTED</Text>
        <Ionicons
          name="arrow-forward"
          size={22}
          color={"white"}
          style={{ marginLeft: 10 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
  },
  logo: {
    width: 271,
    height: 271,
    marginTop: 20,
  },
  title: {
    width: 200,
    color: "#8353E2",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    width: 324,
    height: 43,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#9095A0",
    color: "#9095A0",
    fontSize: 16,
    padding: 20,
    marginVertical: 40,
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
});

export default Home;

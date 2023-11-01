import {
  View,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const todos = ({ navigation, route }) => {
  const [todos, setTodos] = useState([]);
  const usName = route.params.usName;
  useEffect(() => {
    fetch(
      "https://6540e47345bedb25bfc2d34b.mockapi.io/react-lab-todos/TodoList"
    )
      .then((response) => response.json())
      .then((json) => {setTodos(json);console.log("Reload");})
      .catch((error) => console.error(error));

    navigation.setOptions({
      headerRight: () => {
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
      title: "",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={26}
          color="#000"
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <View>
        <SafeAreaView style={styles.TodoListScrollView}>
          <FlatList data={todos} renderItem={renderItem} />
        </SafeAreaView>
      </View>
      <View style={styles.addBtnView}><Pressable style={styles.btnAdd} onPress={()=>navigation.navigate("Add",{usName:usName})}>+</Pressable></View>
    </View>
  );
};

const renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Feather name="check-square" size={24} color="green" />
      <Text style={styles.txtItem}>{item.title}</Text>
      <Pressable onPress={() => console.log("edit")}>
        <Feather name="edit" size={24} color="red" />
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
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9095A0",
    borderRadius: 12,
    marginTop: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    padding: 10,
    width: 334,
    height: 44,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9095A0",
    borderWidth: 1,
    borderColor: "#9095A0",
    borderRadius: 24,
    marginTop: 20,
    width: 334,
    height: 44,
    padding: 10,
  },
  txtItem: {
    fontSize: 16,
    fontWeight: "700",
    color: "#171A1F",
  },
  TodoListScrollView: {
    marginTop: 20,
    maxHeight:500,
  },
  addBtnView: {
    marginTop: 30,
  },
  btnAdd: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },
});

export default todos;

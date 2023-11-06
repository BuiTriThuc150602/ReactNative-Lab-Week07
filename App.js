import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, View } from "react-native";
import Home from "./src/home";
import Todos from "./src/todos";
import Add from "./src/add";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Todos"
          component={Todos}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{headerLeft:()=>null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

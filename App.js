import React from "react";
import home from "./src/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import todos from "./src/todos";
import { Image, Text, View } from "react-native";
import add from "./src/add";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Todos"
          component={todos}
        />
        <Stack.Screen
          name="Add"
          component={add}
          options={{headerLeft:()=>null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Blog from "./screens/blog/Blog";
import Header from "./screens/header/Header";
import { Ionicons } from "@expo/vector-icons";
import BlogHeader from "./screens/header/Blogheader";
// import CarouselCardItem from "./CarouselCardItem.js";
import CarouselCards from "./CarouselCards";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Blog") {
              iconName = focused ? "book" : "book-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => <Header navigation={navigation}></Header>,
          })}
        ></Tab.Screen>
        <Tab.Screen
          name="Profile"
          component={Profile}
          
        ></Tab.Screen>
        <Tab.Screen
          name="Blog"
          component={Blog}
          options={({ navigation }) => ({
            headerRight: () => 
              <BlogHeader navigation={navigation}></BlogHeader>
            
          })}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

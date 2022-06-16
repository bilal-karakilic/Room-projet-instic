import { createStackNavigator } from "@react-navigation/stack";
import Header from "../Components/Header";
import HomeScreen from "../screen/Home";
import React from "react";

export const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#006600",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#FFF",
        },
        headerTintColor: "#FFF",
      },
    },
    {
      initialRouteName: "Home",
    }
);
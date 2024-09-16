// app/(top-tabs)/_layout.tsx
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "Presidential",

          lazy: true,
          tabBarPressOpacity: 1,
          tabBarPressColor: "rgba(0,0,0,0)",
          // tabBarInactiveTintColor: Style.unActiveText,
          // tabBarActiveTintColor: Style.mainColor,
          tabBarContentContainerStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIndicatorStyle: {
            display: "none",
          },
          tabBarItemStyle: {
            width: "auto",
            // paddingHorizontal: 0,
            position: "relative",
            // padding: 0,
            height: 45,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle: {
            width: "auto",
            height: 45,
            borderBottomColor: "red",
            backgroundColor: "#fff",
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="two"
        options={{
          title: "Parliamentary",
          lazy: true,
          tabBarPressOpacity: 1,
          tabBarPressColor: "rgba(0,0,0,0)",
          // tabBarInactiveTintColor: Style.unActiveText,
          // tabBarActiveTintColor: Style.mainColor,
          tabBarContentContainerStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIndicatorStyle: {
            display: "none",
          },
          tabBarItemStyle: {
            width: "auto",
            // paddingHorizontal: 0,
            position: "relative",
            // padding: 0,
            height: 45,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle: {
            width: "auto",
            height: 45,
            borderBottomColor: "red",
            backgroundColor: "#fff",
          },
        }}
      />
    </MaterialTopTabs>
  );
}

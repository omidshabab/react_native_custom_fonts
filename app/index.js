import { StatusBar } from "expo-status-bar";
import React from "react";
import { useCallback } from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Estedad: require("../assets/fonts/Estedad-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");

  return (
    <View
      className="flex-1 items-center justify-center bg-slate-100"
      onLayout={onLayoutRootView}
    >
      <Text
        style={{ fontFamily: "Estedad", fontSize: 20 }}
        className="text-center"
      >
        سلام خوبی این اولین پیام این برنامه هست که به زبان فارسیه!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

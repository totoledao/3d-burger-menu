import { colors } from "@/constants/colors";
import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";

export default function Layout() {
  return (
    <View
      style={{ flex: 1, paddingTop: 48, backgroundColor: colors.background }}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  );
}

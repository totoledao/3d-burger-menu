import { colors } from "@/constants/colors";
import { Slot } from "expo-router";
import { LogBox, StatusBar, View } from "react-native";

export default function Layout() {
  LogBox.ignoreLogs(["Cannot read property 'trim' of undefined"]);

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

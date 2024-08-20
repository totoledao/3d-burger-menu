import { colors } from "@/constants/colors";
import {
  Canvas,
  rect,
  RoundedRect,
  rrect,
  Shadow,
} from "@shopify/react-native-skia";
import React from "react";
import { View } from "react-native";

interface ButtonProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

export function Button({ width, height, children }: ButtonProps) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Canvas
        style={{
          width,
          height,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Shadow dx={-6} dy={-6} blur={4} color={"#e6ffe0"} />
        <Shadow dx={7} dy={7} blur={2} color={"#cfe6ca"} />

        <RoundedRect
          rect={rrect(
            rect(width * 0.1, height * 0.1, width * 0.8, height * 0.8),
            width * 0.1,
            width * 0.1
          )}
          color={colors.background}
        />
      </Canvas>
      {children}
    </View>
  );
}

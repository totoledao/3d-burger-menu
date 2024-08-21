import { colors } from "@/constants/colors";
import {
  Canvas,
  Group,
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
  pressed: boolean;
  children: React.ReactNode;
}

export function Button({
  width,
  height,
  pressed = false,
  children,
}: ButtonProps) {
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
        <Group>
          {!pressed && (
            <>
              <Shadow dx={-6} dy={-6} blur={4} color={"#e6ffe0"} />
              <Shadow dx={7} dy={7} blur={2} color={"#cfe6ca"} />
            </>
          )}

          <RoundedRect
            rect={rrect(
              rect(width * 0.1, height * 0.1, width * 0.8, height * 0.8),
              width * 0.1,
              width * 0.1
            )}
            color={colors.background}
          />
        </Group>

        {pressed && (
          <>
            <Shadow dx={-1} dy={-1} blur={1} color={"rgba(0,0,0,0.05)"} />
            <Shadow dx={5} dy={5} blur={2} color={"#e6ffe0"} />
            <RoundedRect
              rect={rrect(
                rect(width * 0.1, height * 0.1, width * 0.8, height * 0.8),
                width * 0.1,
                width * 0.1
              )}
              color={"#cfe6ca"}
            />
          </>
        )}
      </Canvas>
      {children}
    </View>
  );
}

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
  rounded?: boolean;
  children: React.ReactNode;
}

export function Button({
  width,
  height,
  pressed = false,
  rounded = false,
  children,
}: ButtonProps) {
  const bgRect = rrect(
    rect(width * 0.1, height * 0.1, width * 0.8, height * 0.8),
    rounded ? width : width * 0.1,
    rounded ? width : width * 0.1
  );

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
              <Shadow
                dx={-width * 0.02}
                dy={-width * 0.02}
                blur={4}
                color={"#e6ffe0"}
              />
              <Shadow
                dx={width * 0.03}
                dy={width * 0.03}
                blur={2}
                color={"#cfe6ca"}
              />
            </>
          )}

          <RoundedRect rect={bgRect} color={colors.background} />
        </Group>

        {pressed && (
          <>
            <Shadow
              dx={-width * 0.02}
              dy={-width * 0.02}
              blur={1}
              color={"rgba(0,0,0,0.05)"}
            />
            <Shadow
              dx={width * 0.005}
              dy={width * 0.005}
              blur={2}
              color={"#e6ffe0"}
            />
            <RoundedRect rect={bgRect} color={"#cfe6ca"} />
          </>
        )}
      </Canvas>
      {children}
    </View>
  );
}

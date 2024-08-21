import { Canvas } from "@react-three/fiber/native";
import { Href, Link } from "expo-router";
import React, { ReactNode } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

import { Button } from "@/components/ui/button";
import { colors } from "@/constants/colors";

const screen = Dimensions.get("screen");
const width = screen.width / 2;
const height = screen.width / 1.5;

interface CardProps {
  id: number;
  name: string;
  price: number;
  itemModel: ReactNode;
}

function Card({ id, name, price, itemModel }: CardProps) {
  return (
    <Link
      href={`/item-order/burger/${id}` as Href<`/item-order/burger/${number}`>}
      asChild
    >
      <Pressable style={styles.cardBG}>
        {({ pressed }) => (
          <Button width={width} height={height} pressed={pressed}>
            <Canvas
              style={{ flex: 1, marginTop: 24 }}
              camera={{ position: [2, 1.5, 0] }}
            >
              {itemModel}
            </Canvas>

            <View
              style={[
                StyleSheet.absoluteFill,
                //needed to intercept clicks on the Canvas properly
                { backgroundColor: "transparent" },
              ]}
            />

            <View
              style={{
                justifyContent: "flex-end",
                paddingHorizontal: 40,
                marginBottom: 40,
              }}
            >
              <Text style={{ fontWeight: "600" }}>{name}</Text>
              <Text
                style={{
                  color: colors.text.secondary,
                  fontSize: 20,
                }}
              >
                ${price}
              </Text>
            </View>
          </Button>
        )}
      </Pressable>
    </Link>
  );
}

function Container({ ...props }: ViewProps) {
  return <View style={styles.container} {...props} />;
}

export const CardMenu = {
  card: Card,
  container: Container,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 40,
  },
  cardBG: {
    width: width,
    height: height,
  },
});

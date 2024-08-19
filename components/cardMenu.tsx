import { colors } from "@/constants/colors";
import { Canvas } from "@react-three/fiber/native";
import { Href, Link } from "expo-router";
import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View, ViewProps } from "react-native";

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
        <Canvas camera={{ position: [2, 1.5, 0] }}>{itemModel}</Canvas>
        <Text>{name}</Text>
        <Text style={{ color: colors.text.secondary, fontSize: 20 }}>
          ${price}
        </Text>
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
    gap: 16,
    padding: 16,
  },
  cardBG: {
    width: 180,
    height: 200,
  },
});

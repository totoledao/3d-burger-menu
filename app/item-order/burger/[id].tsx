import { Canvas } from "@react-three/fiber/native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, View } from "react-native";

import { Burger } from "@/components/burger";
import { Header } from "@/components/header";
import { colors } from "@/constants/colors";
import { menu } from "@/constants/menu";

export default function EditBurger() {
  const [editing, setEditing] = useState(false);
  const { id } = useLocalSearchParams<{ id: string }>();
  const menuItem = menu.find((item) => item.id.toString() === id);

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Canvas>
        <Burger editing={editing} ingredients={menuItem?.ingredientList} />
      </Canvas>

      <Button
        onPress={() => setEditing((prev) => !prev)}
        title={`editing = ${editing}`}
        color={colors.tint}
      />
    </View>
  );
}

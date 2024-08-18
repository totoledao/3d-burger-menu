import { Canvas } from "@react-three/fiber/native";
import React, { useState } from "react";
import { Button, View } from "react-native";

import { Burger } from "@/components/burger";

export default function App() {
  const [editing, setEditing] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <Canvas>
        <Burger editing={editing} />
      </Canvas>

      <Button
        onPress={() => setEditing((prev) => !prev)}
        title={`editing = ${editing}`}
      />
    </View>
  );
}

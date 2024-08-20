import React from "react";
import { ScrollView, Text } from "react-native";

import { Burger } from "@/components/burger";
import { CardMenu } from "@/components/cardMenu";
import { colors } from "@/constants/colors";
import { menu } from "@/constants/menu";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, paddingVertical: 40 }}>
      <Text
        style={{
          paddingHorizontal: 32,
          fontWeight: "600",
          color: colors.text.secondary,
          fontSize: 20,
        }}
      >
        Burgers
      </Text>

      <CardMenu.container>
        {menu.map((item) => (
          <CardMenu.card
            id={item.id}
            name={item.itemName}
            price={item.basePrice}
            itemModel={<Burger ingredients={item.ingredientList} />}
          />
        ))}
      </CardMenu.container>
    </ScrollView>
  );
}

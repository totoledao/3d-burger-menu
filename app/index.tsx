import React from "react";
import { ScrollView } from "react-native";

import { Burger } from "@/components/burger";
import { CardMenu } from "@/components/cardMenu";
import { menu } from "@/constants/menu";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
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

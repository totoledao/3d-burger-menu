import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Burger } from "@/components/burger";
import { CardMenu } from "@/components/cardMenu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { colors } from "@/constants/colors";
import { iconName } from "@/constants/icons";
import { menu } from "@/constants/menu";

const buttonSize = 80;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, paddingVertical: 40 }}>
      <View style={styles.header}>
        <Pressable style={styles.cartButton}>
          {({ pressed }) => (
            <Button
              width={buttonSize}
              height={buttonSize}
              pressed={pressed}
              rounded
            >
              <Icons name={iconName.Cart} />
            </Button>
          )}
        </Pressable>
      </View>

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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    margin: 16,
  },
  cartButton: {
    width: buttonSize,
    height: buttonSize,
  },
});

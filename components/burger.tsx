import { Float } from "@react-three/drei/core";
import React, { Suspense } from "react";

import { ingredientName } from "@/constants/ingredients";
import { Ingredient } from "./ingredient";

interface BurgerProps {
  ingredients?: ingredientName[];
  editing?: boolean;
}

export function Burger({
  ingredients = [ingredientName.Butter, ingredientName.Anchovies],
  editing = false,
  ...props
}: BurgerProps) {
  return (
    <Suspense fallback={null}>
      <group>
        <Float autoInvalidate speed={3} floatIntensity={1}>
          <Ingredient
            editing={editing}
            key={"top"}
            name={ingredientName.Bun_Top}
            offset={ingredients.length + 1}
          />
          <Ingredient
            editing={editing}
            key={"bot"}
            name={ingredientName.Bun_Bot}
            offset={0}
          />

          {ingredients.map((name, idx) => (
            <Ingredient
              editing={editing}
              key={name.toString() + idx.toString()}
              name={name}
              offset={idx + 1}
            />
          ))}
        </Float>
      </group>
    </Suspense>
  );
}

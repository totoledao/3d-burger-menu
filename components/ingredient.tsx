import { useLoadModels } from "@/hooks/useLoadModels";
import { Gltf } from "@react-three/drei/native";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

import { ingredientName } from "@/constants/ingredients";

interface IngredientProps {
  name: ingredientName;
  offset: number;
  editing?: boolean;
}

const animStates = {
  speed: {
    faster: 1.5,
    slower: 0.05,
  },
  editing: {
    offset: {
      y: 0.5,
    },
    rotation: {
      x: Math.PI / 6,
    },
  },
  notEditing: {
    offset: {
      y: 0.06,
    },
    rotation: {
      x: 0,
    },
  },
};

export function Ingredient({ name, offset, editing = false }: IngredientProps) {
  const { assets } = useLoadModels();
  const mesh = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!mesh?.current) return;
    //POS
    if (
      mesh.current.position.y >
      offset * animStates?.[editing ? "editing" : "notEditing"].offset.y
    )
      mesh.current.position.y -= delta * animStates.speed.faster;
    if (
      mesh.current.position.y <
      offset * animStates?.[editing ? "editing" : "notEditing"].offset.y
    )
      mesh.current.position.y += delta * animStates.speed.faster;
    //ROT
    if (
      mesh.current.rotation.x >
      animStates?.[editing ? "editing" : "notEditing"].rotation.x
    )
      mesh.current.rotation.x -= delta * animStates.speed.faster;
    if (
      mesh.current.rotation.x <
      animStates?.[editing ? "editing" : "notEditing"].rotation.x
    )
      mesh.current.rotation.x += delta * animStates.speed.faster;

    //Always rotate
    mesh.current.rotation.y += delta * animStates.speed.slower;
  });

  if (!assets[name]?.localUri) return null;

  return (
    <>
      <Gltf ref={mesh} src={assets[name].localUri!} />
    </>
  );
}

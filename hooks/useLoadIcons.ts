import { useAssets } from "expo-asset";

export function useLoadIcons() {
  const [assets, error] = useAssets([require("../assets/icons/cart.svg")]);

  if (error) {
    throw new Error(error.message);
  }

  function checkAssets() {
    if (!assets) return [];
    return assets;
  }

  return {
    assets: checkAssets(),
  };
}

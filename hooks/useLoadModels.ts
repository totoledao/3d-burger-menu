import { useAssets } from "expo-asset";

export function useLoadModels() {
  const [assets, error] = useAssets([
    require("../assets/models/Anchovies_Slice_Fish_0.glb"),
    require("../assets/models/Avocado_Slice_Avocado_0.glb"),
    require("../assets/models/Bacon_Slice_Bacon_0.glb"),
    require("../assets/models/BBQ_Sauce_Slice_BBQ_sauce_0.glb"),
    require("../assets/models/Bread_Slice_Bread_0.glb"),
    require("../assets/models/Bun_Slice_Bot_Bun_0.glb"),
    require("../assets/models/Bun_Slice_Top_Bun_0.glb"),
    require("../assets/models/Cheese_Slice_Cheese_0.glb"),
    require("../assets/models/Chicken_Slice_Chicken_0.glb"),
    require("../assets/models/Cucumber_Slice_Cucumber_0.glb"),
    require("../assets/models/Egg_Slice_Egg_0.glb"),
    require("../assets/models/Fries_Slice_Fries_0.glb"),
    require("../assets/models/Halloumi_Slice_Halloumi_0.glb"),
    require("../assets/models/Ham_Slice_Ham_0.glb"),
    require("../assets/models/Ketchup_Slice_Ketchup_0.glb"),
    require("../assets/models/Lettuce_Slice_Lettuce_0.glb"),
    require("../assets/models/Mayo_Slice_Mayo_0.glb"),
    require("../assets/models/Melted_Butter_Butter_0.glb"),
    require("../assets/models/Mushroom_Slice_Mushroom_0.glb"),
    require("../assets/models/Mustard_Slice_Mustrard_0.glb"),
    require("../assets/models/Olive_Slice_Oilives_0.glb"),
    require("../assets/models/Onion_Slice_Onion_0.glb"),
    require("../assets/models/Patty_Slice_Patty_0.glb"),
    require("../assets/models/Pepper_Slice_Pepper_0.glb"),
    require("../assets/models/Pickle_Slice_Pickles_0.glb"),
    require("../assets/models/Pineapple_Slice_Pineapple_0.glb"),
    require("../assets/models/Qiiwi_Slice_Qiiwi_0.glb"),
    require("../assets/models/Ribs_Slice_Ribs_0.glb"),
    require("../assets/models/Roast_Slice_Roast_0.glb"),
    require("../assets/models/Salami_Slice_Salami_0.glb"),
    require("../assets/models/Salmon_Slice_Salmon_0.glb"),
    require("../assets/models/Sausage_Slice_Sausage_0.glb"),
    require("../assets/models/Shrimp_Slice_Shrimp_0.glb"),
    require("../assets/models/Tomato_Slice_Tomato_0.glb"),
    require("../assets/models/Waffle_Slice_Waffle_0.glb"),
  ]);

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

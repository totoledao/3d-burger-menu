import { colors } from "@/constants/colors";
import { iconName } from "@/constants/icons";
import { useLoadIcons } from "@/hooks/useLoadIcons";
import {
  BlendColor,
  Canvas,
  Group,
  ImageSVG,
  Paint,
  useSVG,
} from "@shopify/react-native-skia";

interface IconsProps {
  name: iconName;
  size?: number;
  color?: string;
}

export function Icons({ name, size = 40, color = colors.primary }: IconsProps) {
  const { assets } = useLoadIcons();
  const svg = useSVG(assets[name]?.localUri);

  const middle = size / 2;

  return (
    <Canvas
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {svg && (
        <Group
          layer={
            <Paint>
              <BlendColor color={color} mode="srcIn" />
            </Paint>
          }
        >
          <ImageSVG
            svg={svg}
            width={size}
            height={size}
            x={middle}
            y={middle}
          />
        </Group>
      )}
    </Canvas>
  );
}

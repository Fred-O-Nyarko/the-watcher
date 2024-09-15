import { View } from "react-native";

export default function Space({ height = 10 }: { height?: number }) {
  return (
    <View
      style={{
        height,
      }}
    />
  );
}

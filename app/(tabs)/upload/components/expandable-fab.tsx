import { StyleSheet, View } from "react-native";
import React from "react";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "@/components/ui/pressable";
import { Fab, FabIcon } from "@/components/ui/fab";
import appTheme from "@/constants/appTheme";
import { AddIcon } from "@/components/ui/icon";

interface ExpandableFABProps {
  takePhoto: () => void;
  pickImage: () => void;
}
const ExpandableFAB = ({ takePhoto, pickImage }: ExpandableFABProps) => {
  const firstValue = useSharedValue(30);
  const secondValue = useSharedValue(30);
  const thirdValue = useSharedValue(30);
  const firstWidth = useSharedValue(60);
  const secondWidth = useSharedValue(60);
  const thirdWidth = useSharedValue(60);
  const isOpen = useSharedValue(false);
  const opacity = useSharedValue(0);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0)
  );

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          firstValue.value = withTiming(30, config);
        }
      });
      secondWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          secondValue.value = withDelay(50, withTiming(30, config));
        }
      });
      thirdWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          thirdValue.value = withDelay(100, withTiming(30, config));
        }
      });
      opacity.value = withTiming(0, { duration: 100 });
    } else {
      firstValue.value = withDelay(200, withSpring(130));
      secondValue.value = withDelay(100, withSpring(210));
      thirdValue.value = withSpring(290);
      firstWidth.value = withDelay(1200, withSpring(200));
      secondWidth.value = withDelay(1100, withSpring(200));
      thirdWidth.value = withDelay(1000, withSpring(200));
      opacity.value = withDelay(1200, withSpring(1));
    }
    isOpen.value = !isOpen.value;
  };

  const opacityText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const firstWidthStyle = useAnimatedStyle(() => {
    console.log(firstWidth.value, "firstWidth");
    return {
      width: firstWidth.value,
    };
  });
  const secondWidthStyle = useAnimatedStyle(() => {
    return {
      width: secondWidth.value,
    };
  });
  const thirdWidthStyle = useAnimatedStyle(() => {
    return {
      width: thirdWidth.value,
    };
  });

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [30, 130],
      [0, 1],
      Extrapolation.CLAMP
    );

    return {
      bottom: firstValue.value,
      transform: [{ scale: scale }],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 210],
      [0, 1],
      Extrapolation.CLAMP
    );

    return {
      bottom: secondValue.value,
      transform: [{ scale: scale }],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 290],
      [0, 1],
      Extrapolation.CLAMP
    );

    return {
      bottom: thirdValue.value,
      transform: [{ scale: scale }],
    };
  });

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value * 45}deg` }],
    };
  });

  return (
    <View>
      {/* <Animated.View
                style={[styles.contentContainer, thirdIcon, thirdWidthStyle]}>
                <View style={styles.iconContainer}>
                    <Icon
                        size={24}
                        color="white"
                        name="camera"
                    />
                </View>
                <Animated.Text style={[styles.text, opacityText]}>
                    Edit File
                </Animated.Text>
            </Animated.View> */}
      <Animated.View
        style={[styles.contentContainer, secondIcon, secondWidthStyle]}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={takePhoto}
        >
          <View style={styles.iconContainer}>
            <Ionicons size={24} color="white" name="camera" />
          </View>
          <Animated.Text style={[styles.text, opacityText]}>
            Take Photo
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[styles.contentContainer, firstIcon, firstWidthStyle]}
      >
        <TouchableOpacity
          onPress={pickImage}
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.iconContainer}>
            <Ionicons size={24} color="white" name="cloud-upload" />
          </View>
          <Animated.Text style={[styles.text, opacityText]}>
            Upload Image
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
      <Pressable>
        <Fab
          // renderInPortal={false}
          // shadow={2}
          placement="bottom right"
          onPress={() => {
            handlePress();
          }}
          size="sm"
        >
          <Animated.View style={[styles.iconContainer, plusIcon]}>
            <FabIcon as={AddIcon} />
          </Animated.View>
        </Fab>
      </Pressable>
      {/* <Pressable
        style={styles.contentContainer}
        onPress={() => {
          handlePress();
        }}
      >
        <Animated.View style={[styles.iconContainer, plusIcon]}>
          <Ionicons color="white" name="add" size={24} />
        </Animated.View>
      </Pressable> */}
    </View>
  );
};

export default ExpandableFAB;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: appTheme.light.primary,
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 26,
    height: 26,
  },
  text: {
    color: "white",
    fontSize: 16,
    width: "100%",
  },
});

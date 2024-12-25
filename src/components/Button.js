import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

export default function Button({ title, onPress, isBlue, isGray }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : Styles.btnLight
      }
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

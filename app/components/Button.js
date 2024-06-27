import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#00599A" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00599A",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

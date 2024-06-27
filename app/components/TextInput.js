import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";



function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[otherProps.editable !=false ? styles.container : styles.disabledContainer, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={"#6e6969"}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={otherProps.editable != false ? "#6e6969" : "#fff"}
        style={otherProps.editable !=false ? styles.inputText : styles.disabledtext}
        
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    color: "#0c0c0c",
    fontSize: 18,
    flex: 1,
  },
  container: {
    backgroundColor:  "#fff",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  disabledContainer: {
    backgroundColor: "#6e6969",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  enabledText: {

  },
  disabledtext: {
    color: "#f8f4f4",
    fontSize: 18,
  },
});

export default AppTextInput;

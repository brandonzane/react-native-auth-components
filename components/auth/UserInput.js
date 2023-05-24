import { View, Text, TextInput } from "react-native";
import React from "react";

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitilize = "none",
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text style={{ fontWeight: "100", fontSize: 15 }}>{name}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={autoCapitilize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default UserInput;

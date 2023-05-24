import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SubmitButton = ({ title, handleSubmit, loading }) => (
  <TouchableOpacity
    onPress={handleSubmit}
    style={{
      backgroundColor: "#000",
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      marginHorizontal: 15,
      borderRadius: 24,
    }}
  >
    <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800" }}>
      {loading ? "Please wait..." : title}
    </Text>
  </TouchableOpacity>
);

export default SubmitButton;

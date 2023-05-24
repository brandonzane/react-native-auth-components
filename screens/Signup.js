import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import UserInput from "../components/auth/UserInput";
import SubmitButton from "../components/auth/SubmitButton";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  // Depending on your auth provider (Firebase, MongoDB, Auth0 etc),
  // this funtion will handle the onPress event when you hit the
  // submit button

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required");

      setLoading(false);
      return;
    }

    console.log("SIGNUP REQUEST => ", name, email, password);

    try {
      const { data } = await axios.post("http:localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      setLoading(false);
      console.log("Signup successful =>", data);
      alert("Signup successful");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 28 }}>Signup</Text>

      <UserInput
        name="NAME"
        value={name}
        setValue={setName}
        autoCapitilize="words"
        autoCorrect={false}
      />

      <UserInput
        name="EMAIL"
        value={email}
        setValue={setEmail}
        autoCompleteType={email}
        keyboardType="email-address"
      />

      <UserInput
        name="PASSWORD"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      <SubmitButton
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default Signup;

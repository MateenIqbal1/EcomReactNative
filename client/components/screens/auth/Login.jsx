import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputBox from "../../form/InputBox";

const Login = ({ navigation }) => {
  const loginImage =
    "https://thumbs.dreamstime.com/z/login-icon-button-vector-illustration-isolated-white-background-126997728.jpg";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please enter email and password");
    }
    navigation.navigate("home");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          isKeyboardVisible ? null : styles.centerContent,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: loginImage }} style={styles.image} />
        </View>
        <InputBox
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
          autoComplete="email"
        />
        <InputBox
          placeholder="Enter your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Don't have an account?
          <Text onPress={() => navigation.navigate("register")} style={styles.link}>
            {" "}Register here
          </Text>
        </Text>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 800,
    backgroundColor: "white",
  },
  centerContent: {
    justifyContent: "center",
  },
  imageContainer: {
    height: 300,
    width: "90%",
    marginBottom: 60,
  },
  image: {
    height: 340,
    width: "100%",
  },
  loginBtn: {
    marginTop: 5,
    backgroundColor: "#CD5C5C",
    width: "70%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 11,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "blue",
  },
});

export default Login;

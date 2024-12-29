import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import InputBox from "../../form/InputBox";
const Register = ({ navigation }) => {
  const loginImage =
    "https://thumbs.dreamstime.com/z/login-icon-button-vector-illustration-isolated-white-background-126997728.jpg";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); // State to track keyboard visibility

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("please provide all fields");
    }
    navigation.navigate("login");
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          isKeyboardVisible ? null : styles.centerContent,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: loginImage }} style={styles.image} />
        </View>
        <InputBox
          placeholder="Enter your Name"
          value={name}
          setValue={setName}
          autoComplete="name"
        />
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
        <InputBox
          placeholder="Enter your address"
          value={address}
          setValue={setAddress}
          autoComplete={"address-line1"}
        />
         <InputBox
          placeholder="Enter your city"
          value={city}
          setValue={setCity}
          autoComplete={"country"}
        />
         <InputBox
          placeholder="Enter your contact"
          value={contact}
          setValue={setContact}
          autoComplete={"tel"}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already have account ?
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.link}
          >
            {" "}
            Login here
          </Text>
        </Text>
      </View>
    </ScrollView>
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
    height: 200,
    width: "60%",
    marginBottom: 60,
  },
  image: {
    height: 300,
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
    color: "white", // White text color
    fontWeight: "bold", // Bold text
    fontSize: 16, // Font size for readability
  },
  link: {
    color: "blue",
  },
});

export default Register;

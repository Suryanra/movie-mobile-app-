// SignUP form

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";

// input form
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [name, email, password]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = "Name is required.";
    }

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const clearHandle = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDisplay(false);
  };

  const sendDataHandle = async () => {
    if (!isFormValid) {
      if (errors.name) {
        alert(errors.name);
      } else if (errors.email) {
        alert(errors.email);
      } else if (errors.password) {
        alert(errors.password);
      }
      return;
    }
    setLoading(true);
    const url = "http://192.168.239.125:3000/users";

    try {
      const data = {
        name,
        password,
        email,
      };
      console.log(data);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("data ", JSON.stringify(data));
      setShowModal(true);
      // Clear fields after successful submission
      clearHandle();
    } catch (err) {
      console.log("Error", err);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <ActivityIndicator
        color="red"
        size={50}
        style={styles.activityIndicator}
        animating={loading}
      ></ActivityIndicator>

      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>You have successfully Login</Text>
            <Button title="Home" onPress={() => setShowModal(false)}></Button>
          </View>
        </View>
      </Modal>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your Name"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your Email"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Text style={styles.toggle}>
            {isPasswordVisible ? "Hide" : "Show"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign-up" color="green" onPress={sendDataHandle} />
      </View>
      <Button title="Clear Input" onPress={clearHandle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  toggle: {
    padding: 8,
    color: "blue",
  },
  buttonContainer: {
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 5,
    height: 250,
  },
});

export default SignUp;

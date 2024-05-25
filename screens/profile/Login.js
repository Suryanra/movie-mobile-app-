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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { useDispatch } from "react-redux";
import {userInfoUpdate} from './../../redux/Action'

// input form
const Login = (props) => {
  const dispatch=useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    let errors = {};
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

const loginHandle=async()=>{
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
    if(email=="suryapratapnra@gmail.com" && password=="123456" ||email=="amit@gmail.com" && password=="654321"){
      // api call
      // login successfull
      // we get data from the api suppose the data is:
      const User={
        name:"Surya singh",
        email:"suryau@gmail.com",
        image:'https://th.bing.com/th?id=OIP.IoUmyjrf4VaXudyiVqv2WwHaII&w=238&h=261&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
      }
      await AsyncStorage.setItem("letBuildLoginToken","token");
      dispatch(userInfoUpdate(User));
      props.onLoginSuccess();
    } else {
      // login failed
      alert('Invalid credentials');
    }
    
}



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
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
        <Button title="Login" color="green" onPress={loginHandle} />
      </View>
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

export default Login;

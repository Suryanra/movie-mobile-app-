// Profile screen

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { userInfoUpdate } from "../../redux/Action";

const ProfileFile = (props) => {
  const dispatch=useDispatch();
  const reducerUserInfo = useSelector((state) => state.reducerUserInfo)[0];
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({
    name: reducerUserInfo.name,
    email: reducerUserInfo.email,
    password: "1234",
  });

  const updateProfile = async () => {
    setLoading(true);
    console.log(info);
    const url = "http://192.168.239.125:3000/users/604a";
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });
      const result = await response.json();
      console.log("updateed data", result);
      setInfo({ name: result.name, email: result.email });
      console.log("info fecthed:", info);
      setShowModal(false);
    } catch (err) {
      console.log("Error", err);
    }
    setLoading(false);
  };
  const deleteProfile = async () => {
    setLoading(true);
    console.log(info);
    const url = "http://192.168.239.125:3000/users/9336";
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
      setShowModal(false);
    } catch (err) {
      console.log("Error", err);
    }
    setLoading(false);
  };

  const logOutHandle = async () => {
    console.log("hello==");
    await AsyncStorage.removeItem("letBuildLoginToken");
    dispatch(userInfoUpdate({}))
    props.onLogoutSuccess();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <Image
          style={{ width: 150, height: 150, borderRadius: 120 }}
          source={{
            uri:
              "https://th.bing.com/th?id=OIP.IoUmyjrf4VaXudyiVqv2WwHaII&w=238&h=261&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
          }}
        ></Image>
        <Text>{info.name}</Text>
      </View>

      {/* =============modal === */}
      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputContainer}>
              <Text style={{ fontWeight: "500" }}>Name:</Text>
              <TextInput
                style={styles.input}
                value={info.name}
                onChangeText={(text) =>
                  setInfo({
                    name: text,
                    email: info.email,
                    password: info.password,
                  })
                }
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={{ fontWeight: "500" }}>Email:</Text>
              <TextInput
                style={styles.input}
                value={info.email}
                onChangeText={(text) =>
                  setInfo({
                    name: info.name,
                    email: text,
                    password: info.password,
                  })
                }
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="Update Profile"
                color="green"
                onPress={updateProfile}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                disabled
                title="Account delete"
                color="red"
                onPress={() => setShowModal(false)}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="Close"
                color="red"
                onPress={() => setShowModal(false)}
              />
            </View>

            {/* =========== */}
          </View>
        </View>
      </Modal>

      <View style={styles.infoField}>
        <Text>Name: {info.name}</Text>
      </View>

      <View style={styles.infoField}>
        <Text>Email: {info.email}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Log Out" onPress={logOutHandle} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Edit Account"
          color="red"
          onPress={() => setShowModal(true)}
        />
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
  infoField: {
    borderWidth: 1,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: "grey",
    padding: 10,
    marginBottom: 10,
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
    //     borderWidth: 1,
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
    //     height: 250,
  },
});

export default ProfileFile;

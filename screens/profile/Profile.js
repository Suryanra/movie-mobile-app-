import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ProfileFile from "./ProfileFile";
import Login from "./Login";
import SignUp from "./SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isLogin, setIsLogin] = useState(false);

  // console.log("user info from reducer: ",reducerUserInfo);
  useEffect(() => {
    const checkLoginHandle = async () => {
      const data = await AsyncStorage.getItem("letBuildLoginToken");
      console.log("data obtained :", data,isLogin);
      if (data) {
        setIsLogin(true);
      }
    };

    checkLoginHandle();
  }, []);

const handleLoginSuccess = async () => {
    await AsyncStorage.setItem("letBuildLogin", "true");
    setIsLogin(true);
};
const handleLogoutSuccess = async () => {
    await AsyncStorage.setItem("letBuildLogin", "true");
    setIsLogin(false);
};

  return (
    <View style={{ flex: 1 }}>
      {isLogin ? <ProfileFile onLogoutSuccess={handleLogoutSuccess} > </ProfileFile> : <Login onLoginSuccess={handleLoginSuccess} ></Login>}
    </View>
  );
};

export default Profile;

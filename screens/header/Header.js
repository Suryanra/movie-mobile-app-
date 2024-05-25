import React, { useEffect, useState } from 'react'
import { View ,Text,StyleSheet, TouchableOpacity, TouchableHighlight,Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
// Home header
const Header = ({navigation}) => {

  const reducerUserInfo=useSelector((state)=>state.reducerUserInfo);
  const [userImage,setUserImage]=useState("https://th.bing.com/th?id=OIP.2ZXXKN7zakCiYeNrq5-b_gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2")
    console.log("header component run",reducerUserInfo)
  useEffect(()=>{
  console.log("header component run useeffet",reducerUserInfo)
if(reducerUserInfo.length && reducerUserInfo[0].image ){
  setUserImage(reducerUserInfo[0].image)
}
else{
  setUserImage("https://th.bing.com/th?id=OIP.2ZXXKN7zakCiYeNrq5-b_gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2")
}
  },[reducerUserInfo])
  return (
    <View style={styles.container }>
      <View style={styles.icon}><TouchableOpacity><AntDesign name="infocirlce" size={20} color="black" /></TouchableOpacity></View>
      <View style={styles.icon}><TouchableOpacity><AntDesign name="customerservice" size={20} color="black" /></TouchableOpacity></View>
      <View style={styles.icon}><TouchableOpacity><AntDesign name="bars" size={20} color="black" /></TouchableOpacity></View>
      <View style={styles.icon}><TouchableOpacity onPress={()=>navigation.navigate('Profile')}><Image style={styles.profileImage} source={{uri:userImage}}></Image></TouchableOpacity></View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
      container:{
            flex:1,
            flexDirection:'row',
            marginHorizontal:10,
            justifyContent:'center',
            alignItems:'center'
      },
      icon:{
 padding:10
      },
      profileImage:{
            width:30,
            height:30,
            borderRadius:50
      }
})

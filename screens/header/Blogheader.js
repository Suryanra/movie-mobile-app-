import React from 'react'
import { View ,Text,StyleSheet, TouchableOpacity, TouchableHighlight,Image} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {blogPageContent} from './../../redux/Action'
import { useDispatch, useSelector } from 'react-redux';


// Home BlogHeader
const BlogHeader = ({navigation}) => {
const dispatch=useDispatch();
const reducer=useSelector((state)=>state.reducer);
console.log("content in reducer ",reducer);
  return (
    <View style={styles.container }>
      <View style={styles.icon}><TouchableOpacity  onPress={()=>{reducer=="Video"? dispatch(blogPageContent("Text")):dispatch(blogPageContent("Video"))}}><AntDesign name={reducer=="Video"?"filetext1":"videocamera"} size={24} color="black" /></TouchableOpacity></View>
      <View style={styles.icon}><TouchableOpacity  onPress={()=>console.warn("Add filter")}><AntDesign name="filter" size={24} color="black" /></TouchableOpacity></View>
      <View style={styles.icon}><TouchableOpacity onPress={()=>console.warn("Add post")}><MaterialIcons name="post-add" size={24} color="black" /></TouchableOpacity></View>
    </View>
  )
}

export default BlogHeader
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

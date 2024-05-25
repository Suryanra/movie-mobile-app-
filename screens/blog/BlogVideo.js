import React, { useEffect, useState } from "react";
import { View, Text, Button, Image,FlatList, StyleSheet,TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

// Blog pagw

const BlogVideo = () => {
  const [data, setData] = useState([]);
      const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const datas = await response.json();
        //   console.log(datas);
        setData(datas);
        setDataFetched(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <View>
      <Text style={{textAlign:"center",fontSize:30,backgroundColor:"black",color:"white"}}>Blog Video</Text>
      {dataFetched && (
        <FlatList
        contentContainerStyle={{margin:3,paddingBottom:120}}
          data={data}
          renderItem={({ item }) => <Component data={item}></Component>}
          keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        />
      )}
    </View>
  );
};

export default BlogVideo;

// component:
const Component = (props) => {

const [display,setDisplay]=useState(false);
  // console.log("component ke andar",props.data)
  return (
    <View style={styles.main}>
      <View style={styles.headerWrapper}>
        <Text style={styles.id}>{props.data.id}</Text>
        <Text style={styles.title}>{props.data.title}</Text>
      </View>
      <View>
            <TouchableOpacity onPress={()=>{setDisplay(!display)}}>
                  <Image style={styles.blogImage} source={{uri:"https://th.bing.com/th?id=OIP.S0HzCUHDEoYPmhG_9dH1SQHaGZ&w=269&h=232&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"}}></Image>
            </TouchableOpacity>
      </View>
      {display &&
      <View style={styles.bodyContent}>
        <Text style={styles.body}>{props.data.body}</Text>
      </View>

      }
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    borderColor: "black",
    borderWidth: 3,
  },
  headerWrapper: {
    textAlign: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor:"skyblue",
    
  },
  id: {
    width: 40,
    height: 40,
    fontSize: 20,
    margin: 10,
    borderWidth: 3,
    borderBlockColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
      fontSize:16,
      fontWeight:"600"
  },
  bodyContent: {
      margin:10
  },
  body: {},
  blogImage:{
      width:"100%",
      height:100
  },
});

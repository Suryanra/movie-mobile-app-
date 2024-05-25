import React from 'react'
import { View,Text ,StyleSheet,TouchableHighlight} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
// import { TouchableHighlight } from 'react-native-gesture-handler';
const GridCard = (props) => {
  return (
      
<TouchableHighlight style={{width:"25%"}} onPress={()=>{console.warn("clicked")}} >
          <View style={styles.container }>
      <MaterialIcons name={props.data.iconName} size={24} color="black" />
      <Text style={styles.text }>{props.data.name}</Text>
    </View>
</TouchableHighlight>
  )
}

export default GridCard

const styles = StyleSheet.create({
      container:{
            borderColor:"black",
            borderWidth:2,
            width:"100%",
            height:100,
            justifyContent:"center",
            alignItems:"center"
      },
      text:{
            fontSize:12
      }

})

import React from 'react'
import { View ,Text} from 'react-native'
import { PanGestureHandler} from 'react-native-gesture-handler';
const Rough = () => {
      //  const tap = Gesture.Tap();
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:"red"}}></View>
      <PanGestureHandler>
              <View style={{flex:1,backgroundColor:"grey"}}></View>
      </PanGestureHandler>

      <View style={{flex:1,backgroundColor:"black"}}></View>
    </View>
  );
  
}

export default Rough

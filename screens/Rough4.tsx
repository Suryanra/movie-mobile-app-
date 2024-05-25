import React from 'react'
import { View ,Button} from 'react-native'
import Rough3 from './Rough3'
const Rough4 = (props) => {
  return (
    <View style={{flex:1,flexDirection:'row',flexWrap:"wrap"}}>
      <Button title="cliked 1" onPress={()=>{props.bottomsheetHandle("hello 3")}}></Button>
    </View>
  )
}

export default Rough4

import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import GridCard from './GridCard'




const GridContainer = () => {

      const Items=[
            {name:"Camera",
            iconName:"camera"
            },
            {name:"pdf",
            iconName:"picture-as-pdf"
            },
            {name:"photo",
            iconName:"add-a-photo"
            },
            {name:"dashboard",
            iconName:"dashboard-customize"
            },
            
      ]

  return (
    <View style={styles.container}>
      {
            Items.map((item,index)=><GridCard data={item} key={index}></GridCard>)
      }
    </View>
  )
}

export default GridContainer
const styles = StyleSheet.create({
      container:{
            flexDirection:"row",
            flexWrap:"wrap"
      }
})

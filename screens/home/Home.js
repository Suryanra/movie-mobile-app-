import React from 'react'
import { View,Text,Dimensions,ScrollView } from 'react-native'
// import { Entypo } from '@expo/vector-icons';
import CarouselCards from '../../CarouselCards'
import Index from './Index'
// import Carousel from 'react-native-reanimated-carousel';
import Component1 from './../component/component1'
import GridContainer from './GridContainer'
import MovieComponent from './MovieComponent'
import Rough from './../Rough'
import Rough2 from '../Rough2'
import Rough3 from '../Rough3'
import Rough4 from '../Rough4'
const Home = () => {
  return (
    // <Rough2></Rough2>
    // <Rough3></Rough3>
    // <Rough4></Rough4>


          <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      <Component1></Component1>
      <GridContainer></GridContainer>
      <MovieComponent></MovieComponent>
    </View>


  )
}

export default Home;



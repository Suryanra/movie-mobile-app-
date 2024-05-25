import React, { useEffect, useState } from 'react'
import { View,Text } from 'react-native'
import BlogFile from './BlogText'
import BlogVideo from './BlogVideo'
import { useSelector } from 'react-redux'


const Blog = () => {
const itemFromReducer = useSelector((state) => state.reducer);
  const [itemToShow, setItemToShow] = useState("Video");

  useEffect(() => {
//     console.log("Data in reducer file Blog:", itemFromReducer);
    setItemToShow(itemFromReducer);
  }, [itemFromReducer]);


      return(
            <View>
                  {
                        itemToShow=="Video"?<BlogVideo></BlogVideo>:<BlogFile></BlogFile>
                  }
            </View>
      )
}

export default Blog

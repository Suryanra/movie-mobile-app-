import { Carousel } from 'react-native-flash-carousel'

// ...

const Index = () => (
  <Carousel
    data={yourData}
    renderItem={({ item }) => <Card item={item} />}
  />
)

export default  Index;
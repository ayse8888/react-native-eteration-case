import { Text, View } from 'react-native'
import { styles } from './index.styles'

export function Details({ route }) {
    const { product } = route.params;
    console.log(route)
    return (
        <View>
      <Text>Product Details Screen</Text>
      <Text>Product ID: {product.id}</Text>
      <Text>Product ID: {product.name}</Text>
      <Text>Product ID: {product.price}</Text>
      <Text>Product ID: {product.description}</Text>
      {/* Display other product details here */}
    </View>
    )
}

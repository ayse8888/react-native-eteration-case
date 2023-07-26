import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { AddToCart } from '../../components/AddToCart'

export function ProductDetails({ route }) {
    const { product } = route.params
    console.log(route)
    return (
        <ScrollView>
            <View style={styles.productDetailContainer}>
                <Image
                    style={styles.productDetailImage}
                    source={{
                        uri: product.image,
                    }}
                />
                <Text style={styles.productDetailName}>{product.name}</Text>
                <Text style={styles.productDetailDescription}>
                    {product.description}
                </Text>
                <View style={styles.productDetailBtnContainer}>
                    <View>
                        <Text style={styles.productDetailPrice}>Price</Text>
                        <Text style={styles.productDetailPrice}>
                            {product.price} ₺
                        </Text>
                    </View>
                    <AddToCart />
                </View>
            </View>
        </ScrollView>
    )
}

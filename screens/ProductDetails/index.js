import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { Button } from '../../components/Button'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

export function ProductDetails({ route }) {
    const { product } = route.params
    const dispatch = useDispatch()

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
                    <Button
                        onPress={() => {
                            dispatch(addToCart(product))
                        }}
                        title="Add To Cart"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

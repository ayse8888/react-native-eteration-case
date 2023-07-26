import { Pressable, Text } from 'react-native'
import { styles } from './index.styles'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

export function AddToCart({ cartProduct }) {
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <Pressable
            style={styles.addToCardBtn}
            onPress={() => {
                handleAddToCart(cartProduct)
            }}
        >
            <Text style={styles.addToCardText}>Add To Card</Text>
        </Pressable>
    )
}

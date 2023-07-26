import { Pressable, Text } from 'react-native'
import { styles } from './index.styles'

export function AddToCart() {
    return (
        <Pressable style={styles.addToCardBtn}>
            <Text style={styles.addToCardText}>Add To Card</Text>
        </Pressable>
    )
}

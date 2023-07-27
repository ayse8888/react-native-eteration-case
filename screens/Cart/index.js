import { FlatList, Pressable, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './index.styles'

export function Cart() {
    const cart = useSelector((state) => state.cart)

    console.log('cart', cart)

    const renderItem = ({ item }) => (
        <View style={styles.cartListContainer}>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
            </View>
            <View style={styles.cartQuantityContainer}>
                <Pressable style={styles.decrementBtn}>
                    <Text>-</Text>
                </Pressable>
                <View style={styles.quantityTextContainer}>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                </View>
                <Pressable style={styles.incrementBtn}>
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
    )

    return (
        <View style={styles.cartContainer}>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

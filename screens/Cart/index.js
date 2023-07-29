import { FlatList, Pressable, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './index.styles'
import {
    decrementQuantity,
    incrementQuantity,
} from '../../redux/slices/cartSlice'
import { Button } from '../../components/Button'
import { CheckOutModal } from '../../components/CheckOutModal'
import { toggleModal } from '../../redux/slices/checkOutModalSlice'

export function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const totalPrice = cart.reduce((sum, item) => {
        return (sum += item.price * item.quantity)
    }, 0)

    const renderItem = ({ item }) => (
        <View style={styles.cartListContainer}>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price} ₺</Text>
            </View>
            <View style={styles.cartQuantityContainer}>
                <Pressable
                    style={styles.decrementBtn}
                    onPress={() => dispatch(decrementQuantity(item))}
                >
                    <Text>-</Text>
                </Pressable>
                <View style={styles.quantityTextContainer}>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                </View>
                <Pressable
                    style={styles.incrementBtn}
                    onPress={() => dispatch(incrementQuantity(item))}
                >
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
    )

    return (
        <ScrollView style={styles.cartContainer}>
            {cart.length > 0 ? (
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text>There is no product in your cart</Text>
            )}
            <View style={styles.checkoutContainer}>
                <View>
                    <Text>Total:</Text>
                    <Text>{totalPrice} ₺</Text>
                </View>
                <Button
                    title="Complete"
                    onPress={() => totalPrice > 0 && dispatch(toggleModal())}
                />
                <CheckOutModal />
            </View>
        </ScrollView>
    )
}

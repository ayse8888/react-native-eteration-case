import { FlatList, Pressable, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export function Cart() {
    const cart = useSelector((state) => state.cart)

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <View>
                <Pressable>
                    <Text>-</Text>
                </Pressable>
                <Text>2</Text>
                <Pressable>
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
    )

    return (
        <View>
            <Text>Cart!</Text>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

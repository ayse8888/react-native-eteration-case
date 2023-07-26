import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from './index.styles'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { AddToCart } from '../../components/AddToCart'

export function Home({ navigation }) {
    const products = useSelector((state) => state.products.productData)
    const isLoading = useSelector((state) => state?.todos?.loading)
    const error = useSelector((state) => state?.todos?.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
        console.log('products', products)
    }, [dispatch])

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error: {error}</Text>
    }

    const handleProductPress = (product) => {
        navigation.navigate('Details', { product })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => handleProductPress(item)}
        >
            <Image
                style={styles.productImage}
                source={{
                    uri: item.image,
                }}
            />
            <Text>{item.price} ₺</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <AddToCart />
        </TouchableOpacity>
    )

    return (
        <ScrollView>
            <View>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </ScrollView>
    )
}

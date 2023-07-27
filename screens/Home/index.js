import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from './index.styles'
import { fetchProducts } from '../../redux/slices/productsSlice'
import { AddToCart } from '../../components/AddToCart'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/Error'

export function Home({ navigation }) {
    const products = useSelector((state) => state.products.productData)
    const isLoading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)
    const dispatch = useDispatch()

    const [searchProduct, setSearchProduct] = useState('')

    const filteredProducts =
        products &&
        products.length > 0 &&
        products.filter((product) =>
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
        )

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error error={error} />
    }

    const handleProductDetails = (product) => {
        navigation.navigate('ProductDetails', { product })
    }


    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => handleProductDetails(item)}
        >
            <Image
                style={styles.productImage}
                source={{
                    uri: item.image,
                }}
            />
            <Text>{item.price} ₺</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <AddToCart cartProduct={item} />
        </TouchableOpacity>
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Ionicons
                        name="search"
                        size={15}
                        color="gray"
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        value={searchProduct}
                        onChangeText={setSearchProduct}
                    />
                </View>
                <View style={styles.filterContainer}>
                    <Text>Filters:</Text>
                    <TouchableOpacity style={styles.filterBox}>
                        <Text style={styles.filterText}>Select Filter</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={filteredProducts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </ScrollView>
    )
}

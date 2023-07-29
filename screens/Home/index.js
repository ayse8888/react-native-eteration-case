import React, { useEffect, useState } from 'react'
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
import { Button } from '../../components/Button'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Loading } from '../../components/Loading'
import { Error } from '../../components/Error'
import { addToCart } from '../../redux/slices/cartSlice'
import { toggleModal } from '../../redux/slices/modalSlice'
import { FilterModal } from '../../components/FilterModal'
import { addToFavorites } from '../../redux/slices/favoritesSlice'
import { Search } from '../../components/Search'
import moment from 'moment'

export function Home({ navigation }) {
    const products = useSelector((state) => state.products.productData)
    const isLoading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)
    const dispatch = useDispatch()

    const [searchProduct, setSearchProduct] = useState('')
    const selectedBrands = useSelector((state) => state.brand.selectedBrands)
    const selectedModels = useSelector((state) => state.model.selectedModels)
    const [asdes, setAsDes] = useState([])

    const filteredBrands = products.filter((product) =>
        selectedBrands.includes(product.brand)
    )

    const filteredModels = products.filter((product) =>
        selectedModels.includes(product.model)
    )

    const filteredProducts =
        products &&
        products.length > 0 &&
        products.filter((product) =>
            product.name.toLowerCase().includes(searchProduct.toLowerCase())
        )

    // high to low
    const handleHighToLowFilter = () => {
        let descending = [...products].sort((a, b) => b.price - a.price)
        setAsDes(descending)
    }

    // low to high
    const handleLowToHighFilter = () => {
        let ascending = [...products].sort((a, b) => a.price - b.price)
        setAsDes(ascending)
    }

    // old to new
    const handleOldToNewFilter = () => {
        let timeAscending = [...products].sort((a, b) =>
            moment(a.createdAt).diff(moment(b.createdAt))
        )
        setAsDes(timeAscending)
    }

    // new to old
    const handleNewToOldFilter = () => {
        let timeDescending = [...products].sort((a, b) =>
            moment(b.createdAt).diff(moment(a.createdAt))
        )
        setAsDes(timeDescending)
    }

    let displayedProducts
    switch (true) {
        case searchProduct.length > 0:
            displayedProducts = filteredProducts
            break
        case filteredBrands.length > 0:
            displayedProducts = filteredBrands
            break
        case filteredModels.length > 0:
            displayedProducts = filteredModels
            break
        case asdes.length > 0:
            displayedProducts = asdes
            break
        default:
            displayedProducts = products
            break
    }

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
            <Text>{item.createdAt}</Text>
            <Text>{item.price} ₺</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Button
                onPress={() => {
                    dispatch(addToCart(item))
                }}
                title="Add To Cart"
            />
            <TouchableOpacity
                onPress={() => {
                    dispatch(addToFavorites(item))
                }}
                style={styles.favoriteBtn}
            >
                <Ionicons
                    name="heart-outline"
                    size={25}
                    color="gray"
                    style={styles.searchIcon}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <Search
                    size={15}
                    value={searchProduct}
                    onChangeText={setSearchProduct}
                />
                <View style={styles.filterContainer}>
                    <Text>Filters:</Text>
                    <TouchableOpacity
                        style={styles.filterBox}
                        onPress={() => dispatch(toggleModal())}
                    >
                        <Text style={styles.filterText}>Select Filter</Text>
                    </TouchableOpacity>
                </View>
                <FilterModal
                    onOldToNew={handleOldToNewFilter}
                    onNewToOld={handleNewToOldFilter}
                    onLowToHigh={handleLowToHighFilter}
                    onHighToLow={handleHighToLowFilter}
                />

                <FlatList
                    data={displayedProducts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </ScrollView>
    )
}

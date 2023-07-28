import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites } from '../../redux/slices/favoritesSlice'
import { Button } from '../../components/Button'

export function Favorites() {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.favorites)
    return (
        <ScrollView>
            {favorites.length === 0 ? (
                <View style={styles.noFavTextContainer}>
                    <Text>No favorite products yet.</Text>
                </View>
            ) : (
                favorites.map((product) => (
                    <View style={styles.favoritesContainer}>
                        <Image
                            style={styles.favImage}
                            source={{
                                uri: product.image,
                            }}
                        />
                        <Text style={styles.favProductName}>
                            {product.name}
                        </Text>
                        <Text style={styles.favProductDescription}>
                            {product.description}
                        </Text>
                        <View style={styles.favProductBtnContainer}>
                            <View>
                                <Text style={styles.favProductPrice}>
                                    Price
                                </Text>
                                <Text style={styles.favProductPrice}>
                                    {product.price} ₺
                                </Text>
                            </View>
                            <Button
                                onPress={() => {
                                    dispatch(removeFromFavorites(product))
                                }}
                                title="Remove From Favorites"
                            />
                        </View>
                    </View>
                ))
            )}
        </ScrollView>
    )
}

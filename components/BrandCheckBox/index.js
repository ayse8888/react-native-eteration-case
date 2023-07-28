import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBrandSelection } from '../../redux/slices/brandSlice'

export function BrandCheckBox() {
    const products = useSelector((state) => state.products.productData)
    const selectedBrands = useSelector((state) => state.brand.selectedBrands)
    const dispatch = useDispatch()

    const renderItem = ({ item }) => {
        const isBrandSelected = selectedBrands.includes(item.brand)

        return (
            <TouchableOpacity
                onPress={() => dispatch(toggleBrandSelection(item.brand))}
            >
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isBrandSelected}
                        onValueChange={() =>
                            dispatch(toggleBrandSelection(item.brand))
                        }
                        color={'#575656'}
                    />
                    <Text style={{ marginLeft: 5 }}>{item.brand}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

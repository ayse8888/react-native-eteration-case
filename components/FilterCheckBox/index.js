import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from './index.styles'
import { useSelector } from 'react-redux'

export function FilterCheckBox() {
    const products = useSelector((state) => state.products.productData)

    return (
        <View>
            {products.map((item) => (
                <View key={item} style={styles.checkboxContainer}>
                    <Checkbox value={false} />
                    <Text style={{ marginLeft: 5 }}>{item.brand}</Text>
                </View>
            ))}
        </View>
    )
}

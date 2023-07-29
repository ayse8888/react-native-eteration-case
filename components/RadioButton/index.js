import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './index.styles'

export default function RadioButton({
    onOldToNew,
    onNewToOld,
    onLowToHigh,
    onHighToLow,
}) {
    return (
        <View style={styles.filterBtnContainer}>
            <TouchableOpacity onPress={onOldToNew} style={styles.filterBtn}>
                <Text style={styles.filterText}>Old To New</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNewToOld} style={styles.filterBtn}>
                <Text style={styles.filterText}>New To Old</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLowToHigh} style={styles.filterBtn}>
                <Text style={styles.filterText}>Price Low To High</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHighToLow} style={styles.filterBtn}>
                <Text style={styles.filterText}>Price High To Low</Text>
            </TouchableOpacity>
        </View>
    )
}

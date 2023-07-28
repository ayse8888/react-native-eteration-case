import { TextInput, View } from 'react-native'
import { styles } from './index.styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

export function Search({ size, value, onChangeText }) {
    return (
        <View style={styles.searchContainer}>
            <Ionicons
                name="search"
                size={size}
                color="gray"
                style={styles.searchIcon}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

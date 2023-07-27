import { Text, TouchableOpacity } from 'react-native'
import { styles } from './index.styles'

export function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

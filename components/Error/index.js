import { Text, View } from 'react-native'
import { styles } from './index.styles'

export function Error({error}) {
    return (
        <View style={styles.errorContainer}>
            <Text>Error: {error}</Text>
        </View>
    )
}
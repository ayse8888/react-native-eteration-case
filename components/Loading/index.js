import { ActivityIndicator, View } from 'react-native'
import { styles } from './index.styles'

export function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#575656" />
        </View>
    )
}

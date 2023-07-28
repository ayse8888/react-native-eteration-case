import { Button, Text, View } from 'react-native'

export function Profile({ navigation }) {
    return (
        <View>
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

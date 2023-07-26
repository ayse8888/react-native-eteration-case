import { Button, Text, View } from 'react-native'

export function Profile({ navigation }) {
    return (
        <View>
            <Text>Profile!</Text>
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

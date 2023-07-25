import { Button, Text, View } from 'react-native'

export function Settings({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Settings!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

import { Button, Text, View } from 'react-native'

export function Profile({ navigation }) {
    return (
        <View style={{marginTop: 20}}>
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

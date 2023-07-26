import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../screens/Home'
import { ProductDetails } from '../../screens/ProductDetails'
import { Settings } from '../../screens/Settings'

const HomeStack = createNativeStackNavigator()

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='ProductDetails' component={ProductDetails} />
        </HomeStack.Navigator>
    )
}

const SettingsStack = createNativeStackNavigator()

export function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='Settings' component={Settings} />
            <SettingsStack.Screen name='ProductDetails' component={ProductDetails} />
        </SettingsStack.Navigator>
    )
}

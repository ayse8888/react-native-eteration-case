import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../screens/Home'
import { Details } from '../../screens/Details'
import { Settings } from '../../screens/Settings'

const HomeStack = createNativeStackNavigator()

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='Details' component={Details} />
        </HomeStack.Navigator>
    )
}

const SettingsStack = createNativeStackNavigator()

export function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='Settings' component={Settings} />
            <SettingsStack.Screen name='Details' component={Details} />
        </SettingsStack.Navigator>
    )
}

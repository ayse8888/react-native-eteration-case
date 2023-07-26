import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { HomeStackScreen, SettingsStackScreen } from './navigation/RootStack'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen
                        name="Settings"
                        component={SettingsStackScreen}
                    />
                </Tab.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
            {/* </PersistGate> */}
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

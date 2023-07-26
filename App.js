import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {
    CartStackScreen,
    FavoritesStackScreen,
    HomeStackScreen,
    ProfileStackScreen,
} from './navigation/RootStack'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName

                            if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home-outline'
                            } else if (route.name === 'Cart') {
                                iconName = focused ? 'basket' : 'basket-outline'
                            } else if (route.name === 'Favorites') {
                                iconName = focused ? 'star' : 'star-outline'
                            } else if (route.name === 'Profile') {
                                iconName = focused ? 'person' : 'person-outline'
                            }
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            )
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen
                        name="Cart"
                        component={CartStackScreen}
                        options={{ tabBarBadge: 3 }}
                    />
                    <Tab.Screen
                        name="Favorites"
                        component={FavoritesStackScreen}
                    />
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
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

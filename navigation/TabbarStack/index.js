import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    CartStackScreen,
    FavoritesStackScreen,
    HomeStackScreen,
    ProfileStackScreen,
} from '../RootStack'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()

export default function TabbarStack() {
    const cart = useSelector((state) => state.cart)
    const quantities = cart.map((product) => product.quantity)
    const quantitiesSum = quantities.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
    )

    return (
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
                    tabBarActiveTintColor: '#575656',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen
                    name="Cart"
                    component={CartStackScreen}
                    options={{ tabBarBadge: quantitiesSum }}
                />
                <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}

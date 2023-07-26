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

const Tab = createBottomTabNavigator()

export default function TabbarStack() {
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
                <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}

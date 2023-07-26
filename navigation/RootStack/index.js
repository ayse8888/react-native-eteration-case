import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../screens/Home'
import { ProductDetails } from '../../screens/ProductDetails'
import { Profile, Settings } from '../../screens/Profile'
import { Cart } from '../../screens/Cart'
import { Favorites } from '../../screens/Favorites'

const HomeStack = createNativeStackNavigator()
export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen
                name="ProductDetails"
                component={ProductDetails}
            />
        </HomeStack.Navigator>
    )
}

const CartStack = createNativeStackNavigator()
export function CartStackScreen() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={Cart} />
        </CartStack.Navigator>
    )
}

const FavoritesStack = createNativeStackNavigator()
export function FavoritesStackScreen() {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen name="Favorites" component={Favorites} />
        </FavoritesStack.Navigator>
    )
}

const ProfileStack = createNativeStackNavigator()
export function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    )
}

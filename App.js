import { StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabbarStack from './navigation/TabbarStack'
import { persistor, store } from './redux/store'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <TabbarStack />
            </PersistGate>
        </Provider>
    )
}

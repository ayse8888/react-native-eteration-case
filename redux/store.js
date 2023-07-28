import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist' // Import persistReducer and persistStore functions
import AsyncStorage from '@react-native-async-storage/async-storage'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import modalReducer from './slices/modalSlice'
import favoriteReducer from './slices/favoritesSlice'
import thunk from 'redux-thunk'
import brandReducer from './slices/brandSlice'
import modelReducer from './slices/modelSlice'

const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    modal: modalReducer,
    favorites: favoriteReducer,
    brand: brandReducer,
    model: modelReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

const persistor = persistStore(store)

export { store, persistor }

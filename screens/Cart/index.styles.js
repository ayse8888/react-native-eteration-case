import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cartContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    cartListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    decrementBtn: {
        backgroundColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 5,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
    incrementBtn: {
        backgroundColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 5,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityTextContainer: {
        backgroundColor: 'gray',
        paddingHorizontal: 15,
        paddingVertical: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkoutContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    }
})

export { styles }

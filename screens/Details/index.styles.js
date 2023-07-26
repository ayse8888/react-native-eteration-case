import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    productDetailContainer: {
        flex: 1,
        padding: 30,
    },
    productDetailImage: {
        width: '100%',
        height: 300,
    },
    productDetailName: {
        fontSize: 30,
        marginVertical: 20
    },
    productDetailDescription: {
        fontSize: 18,
        marginBottom: 100
    },
    productDetailPrice: {
        fontSize: 18,
    },
    productDetailBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export { styles }

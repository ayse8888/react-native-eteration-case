import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    noFavTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    favoritesContainer: {
        padding: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    favImage: {
        width: '100%',
        height: 300,
    },
    favProductName: {
        fontSize: 30,
        marginVertical: 20
    },
    favProductDescription: {
        fontSize: 18,
        marginBottom: 100
    },
    favProductPrice: {
        fontSize: 18,
    },
    favProductBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export { styles }

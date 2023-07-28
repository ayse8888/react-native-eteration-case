import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    productCard: {
        flexBasis: '48%', // This will make sure two items appear in a row with some spacing
        marginVertical: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    listContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    productImage: {
        width: '100%',
        height: 170,
        marginBottom: 20,
    },
    productName: {
        marginVertical: 20,
    },
    filterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterBox: {
        backgroundColor: '#575656',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    filterText: {
        color: '#fff'
    },
    favoriteBtn: {
        marginTop: 10,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export { styles }

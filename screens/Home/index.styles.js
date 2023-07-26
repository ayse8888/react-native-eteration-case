import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    productCard: {
        flexBasis: '48%', // This will make sure two items appear in a row with some spacing
        marginVertical: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#eee",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity:  0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    listContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
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
    addToCardBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'black',
    },
    addToCardText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export { styles }

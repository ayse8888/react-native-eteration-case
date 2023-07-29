import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 8,
        marginVertical: 10,
        alignItems: 'center'
    },
    searchInput: {
        width: '100%',
    },
    searchIcon: {
        marginRight: 5,
    },
})

export { styles }

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgb(225, 225, 225)',
    },
    modalContent: {
        marginBottom: 50,
    },
    stickyButtonLine: {
        width: '100%',
        height: 2,
        backgroundColor: '#9F9F9F',
        marginVertical: 30,
    },
    modalTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 20,
        marginBottom: 20,
    },
    filtersTitle: {
        marginBottom: 5,
    },
    scrollHeight: {
        maxHeight: 200,
    },
})

export { styles }

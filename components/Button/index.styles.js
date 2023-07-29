import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'black',
    },
    btnText: {
        fontSize: Platform.OS === 'ios' ? 16 : 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export { styles }

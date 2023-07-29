import { Modal, SafeAreaView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import { hideModal } from '../../redux/slices/checkOutModalSlice'

export function CheckOutModal() {
    const isModalVisible = useSelector((state) => state.checkOutModal.isModalVisible)
    const dispatch = useDispatch()
    return (
        <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
        >
            <SafeAreaView style={styles.modalContainer}>
                <Text style={{ marginBottom: 20 }}>
                    Thank you for your purchase !
                </Text>
                <Button title="Close" onPress={() => dispatch(hideModal())} />
            </SafeAreaView>
        </Modal>
    )
}

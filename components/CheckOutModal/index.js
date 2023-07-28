import { Modal, SafeAreaView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/slices/modalSlice'
import { Button } from '../Button'

export function CheckOutModal() {
    const isModalVisible = useSelector((state) => state.modal.isModalVisible)
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

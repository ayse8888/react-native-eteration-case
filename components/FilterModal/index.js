import { Modal, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal, toggleModal } from '../../redux/slices/modalSlice'
import { Button } from '../Button'

export function FilterModal({modalContent}) {
    const isModalVisible = useSelector((state) => state.modal.isModalVisible)
    const dispatch = useDispatch()
    return (
        <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalContent}>{modalContent}</Text>
                <Button title="Close" onPress={() => dispatch(hideModal())} />
            </View>
        </Modal>
    )
}

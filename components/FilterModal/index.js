import { Modal, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/slices/modalSlice'
import { Button } from '../Button'
import { FilterCheckBox } from '../FilterCheckBox'

export function FilterModal({ modalContent }) {
    const isModalVisible = useSelector((state) => state.modal.isModalVisible)
    const dispatch = useDispatch()
    return (
        <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalTitleContainer}>
                    <Button title="X" onPress={() => dispatch(hideModal())} />
                    <Text>Filter</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <ScrollView style={{ maxHeight: 150 }}>
                        <Text style={styles.filtersTitle}>Brand</Text>
                        <FilterCheckBox />
                    </ScrollView>
                    <View style={styles.stickyButtonLine} />
                    <ScrollView style={{ maxHeight: 150 }}>
                        <Text style={styles.filtersTitle}>Brand</Text>
                        <FilterCheckBox />
                    </ScrollView>
                    <View style={styles.stickyButtonLine} />
                    <View></View>
                    <Button title="Apply" onPress={() => dispatch(hideModal())} />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

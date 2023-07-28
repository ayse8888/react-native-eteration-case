import { Modal, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/slices/modalSlice'
import { Button } from '../Button'
import { BrandCheckBox } from '../BrandCheckBox'
import { ModelCheckbox } from '../ModelCheckBox'
import { Search } from '../Search'

export function FilterModal() {
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
                    <Text style={{fontSize: 25}}>Filter</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <ScrollView style={styles.scrollHeight}>
                        <Text style={styles.filtersTitle}>Brand</Text>
                        <Search size={15} />
                        <BrandCheckBox />
                    </ScrollView>
                    <View style={styles.stickyButtonLine} />
                    <ScrollView style={styles.scrollHeight}>
                        <Text style={styles.filtersTitle}>Model</Text>
                        <Search size={15} />
                        <ModelCheckbox />
                    </ScrollView>
                    <View style={styles.stickyButtonLine} />
                    <View></View>
                    <Button title="Apply" onPress={() => dispatch(hideModal())} />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

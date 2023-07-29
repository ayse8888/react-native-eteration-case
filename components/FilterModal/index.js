import { Modal, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './index.styles'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../redux/slices/modalSlice'
import { Button } from '../Button'
import { BrandCheckBox } from '../BrandCheckBox'
import { ModelCheckbox } from '../ModelCheckBox'
import { Search } from '../Search'
import RadioButton from '../RadioButton'

export function FilterModal({
    onOldToNew,
    onNewToOld,
    onLowToHigh,
    onHighToLow,
}) {
    const isModalVisible = useSelector((state) => state.modal.isModalVisible)
    const dispatch = useDispatch()
    return (
        <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
        >
            <SafeAreaView style={styles.modalContainer} testID="modal-container">
                <ScrollView>
                    <View style={styles.modalTitleContainer}>
                        <Button
                            title="X"
                            onPress={() => dispatch(hideModal())}
                        />
                        <Text style={{ fontSize: 25 }}>Filter</Text>
                    </View>
                    <View style={{ padding: 20 }}>
                        <View>
                            <Text style={styles.filtersTitle}>Sort By</Text>
                            <RadioButton
                                onHighToLow={onHighToLow}
                                onLowToHigh={onLowToHigh}
                                onNewToOld={onNewToOld}
                                onOldToNew={onOldToNew}
                            />
                        </View>
                        <View style={styles.stickyButtonLine} />
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
                        <Button
                            title="Apply"
                            onPress={() => dispatch(hideModal())}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

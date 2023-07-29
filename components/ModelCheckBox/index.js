import Checkbox from 'expo-checkbox'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './index.styles'
import { toggleModelSelection } from '../../redux/slices/modelSlice'

export function ModelCheckbox() {
    const products = useSelector((state) => state.products.productData)
    const selectedModels = useSelector((state) => state.model.selectedModels)
    const dispatch = useDispatch()

    const renderItem = ({ item }) => {
        const isModelSelected = selectedModels.includes(item.model)
        return (
            <TouchableOpacity
                onPress={() => dispatch(toggleModelSelection(item.model))}
            >
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isModelSelected}
                        onValueChange={() =>
                            dispatch(toggleModelSelection(item.model))
                        }
                        color={'#575656'}
                        testID='model-checkbox'
                    />
                    <Text style={{ marginLeft: 5 }}>{item.model}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

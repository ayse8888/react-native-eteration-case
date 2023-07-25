import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'
import { Button, Text, View } from 'react-native'

export function Home({ navigation }) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <View>
                <Button
                    title="Go to Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
                <Button
                    title="Increment"
                    aria-label="Increment value"
                    onPress={() => {
                        dispatch(increment())
                        console.log('count')
                    }}
                >
                    <Text>Increment</Text>
                </Button>
                <Text>{count}</Text>
                <Button
                    title="Decrement"
                    aria-label="Decrement value"
                    onPress={() => dispatch(decrement())}
                >
                    <Text>Decrement</Text>
                </Button>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    )
}

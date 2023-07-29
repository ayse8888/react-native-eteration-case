import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import RadioButton from './index'

describe('RadioButton', () => {
    it('renders correctly when Old To New button is pressed', () => {
        const mockOnOldToNew = jest.fn()
        const { getByText } = render(
            <RadioButton onOldToNew={mockOnOldToNew} />
        )

        const oldToNewButton = getByText('Old To New')
        fireEvent.press(oldToNewButton)

        expect(mockOnOldToNew).toHaveBeenCalled()
    })

    it('renders correctly when New To Old button is pressed', () => {
        const mockOnNewToOld = jest.fn()
        const { getByText } = render(<RadioButton onNewToOld={mockOnNewToOld} />)

        const newToOldButton = getByText('New To Old')
        fireEvent.press(newToOldButton)

        expect(mockOnNewToOld).toHaveBeenCalled()
    })

    it('renders correctly when Price Low To High button is pressed', () => {
        const mockOnLowToHigh = jest.fn()
        const { getByText } = render(<RadioButton onLowToHigh={mockOnLowToHigh} />)

        const lowToHighButton = getByText('Price Low To High')
        fireEvent.press(lowToHighButton)

        expect(mockOnLowToHigh).toHaveBeenCalled()
    })

    it('renders correctly when Price High To Low button is pressed', () => {
        const mockOnHighToLow = jest.fn()
        const { getByText } = render(<RadioButton onHighToLow={mockOnHighToLow} />)

        const hightToLowButton = getByText('Price High To Low')
        fireEvent.press(hightToLowButton)

        expect(mockOnHighToLow).toHaveBeenCalled()
    })
})

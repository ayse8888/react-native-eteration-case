import React from 'react'
import { render } from '@testing-library/react-native'
import { Loading } from './index'

describe('Loading', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Loading />)
        const loadingContainer = getByTestId('loading-container')
        const activityContainer = getByTestId('activity-container')

        expect(loadingContainer).toBeTruthy()
        expect(activityContainer).toBeTruthy()
    })
})

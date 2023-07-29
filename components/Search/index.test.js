import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Search } from './index'; // Make sure the import path is correct

describe('Search', () => {
    it('renders correctly', () => {
        const {getByPlaceholderText} = render(<Search />);
        const searchInput =  getByPlaceholderText('Search')
        expect(searchInput).toBeTruthy()
    });

    it('search correctly', () => {
        const onChangeText = jest.fn()
        const {getByPlaceholderText} = render(<Search onChangeText={onChangeText} />);
        const searchInput =  getByPlaceholderText('Search')
        fireEvent.changeText(searchInput, "hello world")
        expect(onChangeText).toBeCalledWith("hello world")
    })
});

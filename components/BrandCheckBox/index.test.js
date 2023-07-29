import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import  { Provider, useSelector } from 'react-redux'; // Assuming you have a Redux store provider
import { BrandCheckBox } from './index'; // Make sure the import path is correct
import { toggleBrandSelection } from '../../redux/slices/brandSlice';
const Redux = {useSelector}

// Mock the Redux store and the useDispatch hook
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('BrandCheckBox', () => {
  it('renders the correct number of items', () => {
    // Mock the useSelector hook
    const mockProductData = [
      { id: '1', brand: 'Brand 1' },
      { id: '2', brand: 'Brand 2' },
      // Add more mock product data as needed
    ];
    const mockSelectedBrands = [];
    jest.spyOn(Redux, 'useSelector').mockReturnValueOnce(mockProductData).mockReturnValueOnce(mockSelectedBrands);

    const { getAllByTestId } = render(<BrandCheckBox />);
    const checkboxes = getAllByTestId('checkbox');
    expect(checkboxes.length).toBe(mockProductData.length);
  });

  it('dispatches toggleBrandSelection when a checkbox is pressed', () => {
    const mockProductData = [
      { id: '1', brand: 'Brand 1' },
      { id: '2', brand: 'Brand 2' },
      // Add more mock product data as needed
    ];
    const mockSelectedBrands = [];
    jest.spyOn(Redux, 'useSelector').mockReturnValueOnce(mockProductData).mockReturnValueOnce(mockSelectedBrands);

    const { getAllByTestId } = render(<BrandCheckBox />);
    const checkbox = getAllByTestId('checkbox')[0]; // Use the appropriate data-testid for the checkbox
    fireEvent(checkbox, 'press');

    expect(mockDispatch).toHaveBeenCalledWith(toggleBrandSelection('Brand 1'));
  });
});

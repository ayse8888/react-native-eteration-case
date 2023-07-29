import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import  { Provider, useSelector } from 'react-redux';
import { BrandCheckBox } from './index';
import { toggleBrandSelection } from '../../redux/slices/brandSlice';
const Redux = {useSelector}

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('BrandCheckBox', () => {
  it('renders the correct number of items', () => {
    const mockProductData = [
      { id: '1', brand: 'Brand 1' },
      { id: '2', brand: 'Brand 2' },
    ];
    const mockSelectedBrands = [];
    jest.spyOn(Redux, 'useSelector').mockReturnValueOnce(mockProductData).mockReturnValueOnce(mockSelectedBrands);

    const { getAllByTestId } = render(<BrandCheckBox />);
    const checkboxes = getAllByTestId('brand-checkbox');
    expect(checkboxes.length).toBe(mockProductData.length);
  });

  it('dispatches toggleBrandSelection when a checkbox is pressed', () => {
    const mockProductData = [
      { id: '1', brand: 'Brand 1' },
      { id: '2', brand: 'Brand 2' },
    ];
    const mockSelectedBrands = [];
    jest.spyOn(Redux, 'useSelector').mockReturnValueOnce(mockProductData).mockReturnValueOnce(mockSelectedBrands);

    const { getAllByTestId } = render(<BrandCheckBox />);
    const checkbox = getAllByTestId('brand-checkbox')[0];
    fireEvent(checkbox, 'press');

    expect(mockDispatch).toHaveBeenCalledWith(toggleBrandSelection('Brand 1'));
  });
});

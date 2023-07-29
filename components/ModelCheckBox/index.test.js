import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import  { Provider, useSelector } from 'react-redux';
import { ModelCheckbox } from './index';
import { toggleModelSelection } from '../../redux/slices/modelSlice';
const Redux = {useSelector}

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('ModelCheckBox', () => {
  it('renders the correct number of items', () => {
    const mockProductData = [
      { id: '1', model: 'Model 1' },
      { id: '2', model: 'Model 2' },
    ];
    const mockSelectedModels = [];
    jest.spyOn(Redux, 'useSelector').mockReturnValueOnce(mockProductData).mockReturnValueOnce(mockSelectedModels);

    const { getAllByTestId } = render(<ModelCheckbox />);
    const checkboxes = getAllByTestId('model-checkbox');
    expect(checkboxes.length).toBe(mockProductData.length);
  });

  it('dispatches toggleModelSelection when a checkbox is pressed', () => {
    const mockProductData = [
      { id: '1', model: 'Model 1' },
      { id: '2', model: 'Model 2' },
    ];
    const mockSelectedModels = [];
    jest.spyOn(Redux, 'useSelector').mockReturnValueOnce(mockProductData).mockReturnValueOnce(mockSelectedModels);

    const { getAllByTestId } = render(<ModelCheckbox />);
    const checkbox = getAllByTestId('model-checkbox')[0];
    fireEvent(checkbox, 'press');

    expect(mockDispatch).toHaveBeenCalledWith(toggleModelSelection('Model 1'));
  });
});

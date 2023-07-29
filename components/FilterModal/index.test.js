import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FilterModal } from './index';
import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('FilterModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays the modal when isModalVisible is true', () => {
    useSelector.mockReturnValue(true);

    const { getByTestId } = render(<FilterModal />);
    const modalContainer = getByTestId('modal-container');

    expect(modalContainer).toBeTruthy();
  });

  it('hides the modal when isModalVisible is false', () => {
    useSelector.mockReturnValue(false);

    const { queryByTestId } = render(<FilterModal />);
    const modalContainer = queryByTestId('modal-container');

    expect(modalContainer).toBeNull();
  });

  it('renders correctly when the radio buttons are pressed', () => {
    const mockOnOldToNew = jest.fn();
    const mockOnNewToOld = jest.fn();
    const mockOnLowToHigh = jest.fn();
    const mockOnHighToLow = jest.fn();
    useSelector.mockReturnValue(true);
    const { getByText } = render(
      <FilterModal
        onOldToNew={mockOnOldToNew}
        onNewToOld={mockOnNewToOld}
        onLowToHigh={mockOnLowToHigh}
        onHighToLow={mockOnHighToLow}
      />
    );

    fireEvent.press(getByText('Old To New'));
    expect(mockOnOldToNew).toHaveBeenCalled();

    fireEvent.press(getByText('New To Old'));
    expect(mockOnNewToOld).toHaveBeenCalled();

    fireEvent.press(getByText('Price Low To High'));
    expect(mockOnLowToHigh).toHaveBeenCalled();

    fireEvent.press(getByText('Price High To Low'));
    expect(mockOnHighToLow).toHaveBeenCalled();
  });

  it('renders hideModal when the close button is pressed', () => {
    useSelector.mockReturnValue(true);
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<FilterModal />);

    fireEvent.press(getByText('X'));

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('renders hideModal when the "Apply" button is pressed', () => {
    useSelector.mockReturnValue(true);
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<FilterModal />);

    fireEvent.press(getByText('Apply'));

    expect(mockDispatch).toHaveBeenCalled();
  });
});

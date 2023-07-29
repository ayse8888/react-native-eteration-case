import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './index'; // Make sure the import path is correct

// Mock the onPress function
const mockOnPress = jest.fn();

describe('Button', () => {
  it('renders correctly with the provided title', () => {
    const title = 'Test Button';
    const { getByText } = render(<Button title={title} onPress={mockOnPress} />);

    const button = getByText(title);
    expect(button).toBeTruthy();
  });

  it('calls the onPress function when pressed', () => {
    const title = 'Test Button';
    const { getByText } = render(<Button title={title} onPress={mockOnPress} />);

    const button = getByText(title);
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalled();
  });
});

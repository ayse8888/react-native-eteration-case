import React from 'react';
import { render } from '@testing-library/react-native';
import { Error } from './index';

describe('Error', () => {
  it('renders the error message correctly', () => {
    const errorMessage = 'This is a test error message.';

    const { getByText } = render(<Error error={errorMessage} />);

    const errorMessageText = getByText(`Error: ${errorMessage}`);
    expect(errorMessageText).toBeTruthy();
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';

test('renders component', () => {
  render(<App />)
  expect(screen.getByText('Hello World!')).toBeInTheDocument()
});

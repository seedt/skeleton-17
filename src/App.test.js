import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />)

  const header = screen.getByRole('heading', {
    Name: 'header'
  });
  expect(header).toBeInTheDocument();
});

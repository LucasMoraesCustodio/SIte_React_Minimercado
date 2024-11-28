import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and footer', () => {
  render(<App />);

  expect(screen.getByText(/Nome da Empresa/i)).toBeInTheDocument();
  expect(screen.getByText(/Minimercados/i)).toBeInTheDocument();
});

import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Login Component', () => {
  const mockSetUser = jest.fn();

  beforeEach(() => {
    render(
      <Router>
        <Login setUser={mockSetUser} />
      </Router>
    );
  });

  afterEach(() => {
    mockSetUser.mockClear();
  });

  test('renders login form', () => {
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Login/i)[1]).toBeInTheDocument(); 
  });

  test('allows user to switch to registration form', () => {
    fireEvent.click(screen.getByText(/Não tem uma conta\? Cadastre-se/i));
    expect(screen.getByText(/Cadastro/i)).toBeInTheDocument();
    expect(screen.getByText(/Cadastrar/i)).toBeInTheDocument();
  });

  test('displays error message on login failure', async () => {
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getAllByText(/Login/i)[1]); 

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('displays error message on registration failure', async () => {
    fireEvent.click(screen.getByText(/Não tem uma conta\? Cadastre-se/i));
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'short' } });
    fireEvent.click(screen.getByText(/Cadastrar/i));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
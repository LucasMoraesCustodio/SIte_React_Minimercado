import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

test('renders Header component with company name and profile image', () => {
    const { getByText, getByAltText } = render(<Header companyName="Minha Empresa" />);

    expect(getByText('Minha Empresa')).toBeInTheDocument();

    expect(getByAltText('Logo empresa')).toBeInTheDocument();

    expect(getByAltText('Perfil')).toBeInTheDocument();
});

test('company name and logo link to home page', () => {
    const { getByText, getByAltText } = render(<Header companyName="Minha Empresa" />);

    expect(getByText('Minha Empresa').closest('a')).toHaveAttribute('href', '/');


    expect(getByAltText('Logo empresa').closest('a')).toHaveAttribute('href', '/');
});

test('profile image links to profile page', () => {
    const { getByAltText } = render(<Header companyName="Minha Empresa" />);

    expect(getByAltText('Perfil').closest('a')).toHaveAttribute('href', '/perfil');
});

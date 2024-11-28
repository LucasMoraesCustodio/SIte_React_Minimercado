import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SalesPoint from '../SalesPoint';

test('renders SalesPoint component with correct props', () => {
  const props = {
    name: 'Ponto de Venda 1',
    status: 'Ativo',
    stockSituation: 'Em estoque',
    totalSales: 1000
  };

  render(
    <MemoryRouter>
      <SalesPoint {...props} />
    </MemoryRouter>
  );

  expect(screen.getByText('Ponto de Venda 1')).toBeInTheDocument();
  expect(screen.getByText('Status: Ativo')).toBeInTheDocument();
  expect(screen.getByText('Situação estoque: Em estoque')).toBeInTheDocument();
  expect(screen.getByText('Total de vendas: R$ 1000')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /ver detalhes/i })).toBeInTheDocument();
});
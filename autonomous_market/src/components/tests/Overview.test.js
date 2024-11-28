
import React from 'react';
import { render } from '@testing-library/react';
import Overview from '../Overview';
import '@testing-library/jest-dom/';

test('renders total sales correctly', () => {
  const { getByText } = render(<Overview totalSales={1000} numSales={50} />);
  expect(getByText('Total de vendas: R$ 1000')).toBeInTheDocument();
});

test('renders number of sales correctly', () => {
  const { getByText } = render(<Overview totalSales={1000} numSales={50} />);
  expect(getByText('Nº de vendas: 50')).toBeInTheDocument();
});

test('renders line chart correctly', () => {
  const { container } = render(<Overview totalSales={1000} numSales={50} />);
  const lineChart = container.querySelector('.grafico canvas');
  expect(lineChart).toBeInTheDocument();
});

test('renders bar charts correctly', () => {
  const { container } = render(<Overview totalSales={1000} numSales={50} />);
  const barCharts = container.querySelectorAll('.grafico canvas');
  expect(barCharts.length).toBe(3);
});


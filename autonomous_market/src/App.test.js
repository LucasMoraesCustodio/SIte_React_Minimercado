import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and footer', () => {
  render(<App />);

  expect(screen.getByText(/Nome da Empresa/i)).toBeInTheDocument();
  expect(screen.getByText(/Minimercados/i)).toBeInTheDocument();
});

test('stockSituation in salesPoints array is not negative', () => {
  const salesPoints = [
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV B', status: 'Ativo', stockSituation: '50%', totalSales: 1500 },
    { name: 'PDV C', status: 'Ativo', stockSituation: '0%', totalSales: 1000 },
  ];

  salesPoints.forEach(point => {
    const stockValue = parseInt(point.stockSituation);
    expect(stockValue).toBeGreaterThanOrEqual(0);
  });
});

test('totalSales in salesPoints array is not negative', () => {
  const salesPoints = [
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV B', status: 'Ativo', stockSituation: '50%', totalSales: 1500 },
    { name: 'PDV C', status: 'Ativo', stockSituation: '0%', totalSales: 1000 },
  ];

  salesPoints.forEach(point => {
    const sales = parseInt(point.totalSales);
    expect(sales).toBeGreaterThanOrEqual(0);
  });
});

test('names in salesPoints array have 2 or more characters excluding spaces', () => {
  const salesPoints = [
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV B', status: 'Ativo', stockSituation: '50%', totalSales: 1500 },
    { name: 'PDV C', status: 'Ativo', stockSituation: '0%', totalSales: 1000 },
  ];

  salesPoints.forEach(point => {
    expect(point.name.trim().length).toBeGreaterThanOrEqual(2);
  });
});

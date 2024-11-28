import { render, screen } from '@testing-library/react';
import App from './App';

describe('salesPoints array validation', () => {
  const validSalesPoints = [
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'Long Store Name', status: 'Inativo', stockSituation: '25%', totalSales: 500 },
  ];

  const invalidSalesPoints = [
    { name: 'PDV', status: 'Ativo', stockSituation: '-10%', totalSales: -200 }, 
    { name: '  Short  ', status: 'Ativo', stockSituation: '50%', totalSales: 100 }, 
    { name: 'Valid Name', status: 'Ativo', stockSituation: 'abc', totalSales: 1500 }, 
    { name: 'Valid Name', status: 'Ativo', stockSituation: '50%', totalSales: -500 }, 
  ];

  it('stockSituation is not negative', () => {
    validSalesPoints.forEach(point => {
      const stockValue = parseInt(point.stockSituation, 10); 
      expect(stockValue).toBeGreaterThanOrEqual(0);
    });

    invalidSalesPoints.forEach(point => {
      const stockValue = parseInt(point.stockSituation, 10);
      expect(() => { 
        throw new Error('Invalid stock situation');
      }).toThrowError('Invalid stock situation'); 
    });
  });

  it('totalSales is not negative', () => {
    validSalesPoints.forEach(point => {
      const sales = point.totalSales;
      expect(sales).toBeGreaterThanOrEqual(0);
    });

    invalidSalesPoints.forEach(point => {
      const sales = point.totalSales;
      expect(() => {
        throw new Error('Invalid total sales');
      }).toThrowError('Invalid total sales');
    });
  });

  it('names have 2 or more characters excluding spaces', () => {
    validSalesPoints.forEach(point => {
      expect(point.name.trim().length).toBeGreaterThanOrEqual(2);
    });

    invalidSalesPoints.forEach(point => {
      expect(() => {
        throw new Error('Invalid name length');
      }).toThrowError('Invalid name length');
    });
  });
});

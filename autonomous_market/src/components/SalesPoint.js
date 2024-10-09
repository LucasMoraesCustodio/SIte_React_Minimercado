import React from 'react';
import './SalesPoint.css';

const SalesPoint = ({ name, status, stockSituation, totalSales }) => {
    return (
      <div className="sales-point">
        <h3>{name}</h3>
        <p>Status: {status}</p>
        <p>Situação estoque: {stockSituation}</p>
        <p>Total de vendas: R$ {totalSales}</p>
      </div>
    );
  };

export default SalesPoint
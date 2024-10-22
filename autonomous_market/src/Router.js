import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Overview';
import SalesPoint from './components/SalesPoint';
import Detalhes from './components/pdvConfig';

const RouterConfig = ({ totalSales, numSales, salesPoints }) => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h2>Visão geral</h2>
          <Overview totalSales={totalSales} numSales={numSales} />
          <hr />
          <h2>PDVs</h2>
          {salesPoints.map((point, index) => (
            <SalesPoint key={index} {...point} />
          ))}
        </>
      } />
      <Route path="/detalhes" element={<Detalhes />} />
    </Routes>
  );
};

export default RouterConfig;
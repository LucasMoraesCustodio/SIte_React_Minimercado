import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Overview';
import SalesPoint from './components/SalesPoint';
import Detalhes from './components/pdvConfig';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const RouterConfig = ({ totalSales, numSales, salesPoints, companyName, user, setUser, companyId }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/app" element={
        <>
          <Header companyName={companyName} />
          <h2>Visão geral</h2>
          <Overview totalSales={totalSales} numSales={numSales} user={user} companyId={companyId} />
          <hr />
          <h2>PDVs</h2>
          {salesPoints.map((point, index) => (
            <SalesPoint key={index} {...point} user={user} companyId={companyId} />
          ))}
          <Footer />
        </>
      } />
      <Route path="/detalhes" element={<Detalhes user={user} />} />
    </Routes>
  );
};

export default RouterConfig;
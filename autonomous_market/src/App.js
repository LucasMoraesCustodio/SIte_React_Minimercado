import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterConfig from './Router';
import { clarity } from 'react-microsoft-clarity';

function App() {
  clarity.init('ondpa71rp3');
  const totalSales = 10000;
  const numSales = 500;
  const salesPoints = [
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV B', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <RouterConfig totalSales={totalSales} numSales={numSales} salesPoints={salesPoints} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

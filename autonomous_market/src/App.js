import './App.css';
import Overview from './components/Overview.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SalesPoint from './components/SalesPoint.js';

function App() {
  const totalSales = 10000;
  const numSales = 500;
  const salesPoints = [
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '70%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '90%', totalSales: 2000 },
    { name: 'PDV A', status: 'Ativo', stockSituation: '80%', totalSales: 2000 },
    { name: 'PDV B', status: 'Ativo', stockSituation: '70%', totalSales: 2000 }
  ];
  return (
    <div className="App">
      <Header />
      <h2>Visão geral</h2>
      <Overview totalSales={totalSales} numSales={numSales} />
      <hr/>
      <h2>PDVs</h2>
      {salesPoints.map((point, index) => (
        <SalesPoint key={index} {...point} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

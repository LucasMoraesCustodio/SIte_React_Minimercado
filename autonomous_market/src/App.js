import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RouterConfig from './Router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { clarity } from 'react-microsoft-clarity';

function App() {
  //clarity.init('ondpa71rp3');
  const [user, setUser] = useState(null);
  const companyName = "Nome da Empresa";
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

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <RouterConfig 
          totalSales={totalSales} 
          numSales={numSales} 
          salesPoints={salesPoints} 
          companyName={companyName} 
          user={user} 
          setUser={setUser} // Passar a função setUser
        />
      </div>
    </Router>
  );
}

export default App;

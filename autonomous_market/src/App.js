import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RouterConfig from './Router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [salesPoints, setSalesPoints] = useState([]);
  const companyName = "Nome da Empresa";
  const totalSales = 10000;
  const numSales = 500;
  const companyId = "companyId"; // Adicionar a referência para o documento da empresa

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchSalesPoints = async () => {
      const querySnapshot = await getDocs(collection(db, "salesPoints"));
      const points = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSalesPoints(points);
    };

    fetchSalesPoints();
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
          setUser={setUser}
          companyId={companyId} // Passar a referência para o documento da empresa
        />
      </div>
    </Router>
  );
}

export default App;

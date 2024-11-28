import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        lastLogin: new Date(),
        companyId: "companyId" // Adicionar a referência para o documento da empresa
      }, { merge: true });

      // Criar ou atualizar o documento da empresa
      const companyRef = doc(db, "companies", "companyId");
      await setDoc(companyRef, {
        name: "Nome da Empresa"
      }, { merge: true });

      // Criar ou atualizar os pontos de venda
      const salesPoints = [
        { id: "salesPoint1", name: "Ponto de Venda 1" },
        { id: "salesPoint2", name: "Ponto de Venda 2" }
      ];
      for (const point of salesPoints) {
        const pointRef = doc(db, "salesPoints", point.id);
        await setDoc(pointRef, {
          name: point.name,
          companyId: companyRef.id
        }, { merge: true });
      }

      navigate('/app'); // Redirecionar para a tela principal
    } catch (error) {
      setError('Falha no login. Verifique suas credenciais e tente novamente.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        createdAt: new Date(),
        companyId: "companyId" // Adicionar a referência para o documento da empresa
      });

      // Criar ou atualizar o documento da empresa
      const companyRef = doc(db, "companies", "companyId");
      await setDoc(companyRef, {
        name: "Nome da Empresa"
      });

      // Criar ou atualizar os pontos de venda
      const salesPoints = [
        { id: "salesPoint1", name: "Ponto de Venda 1" },
        { id: "salesPoint2", name: "Ponto de Venda 2" }
      ];
      for (const point of salesPoints) {
        const pointRef = doc(db, "salesPoints", point.id);
        await setDoc(pointRef, {
          name: point.name,
          companyId: companyRef.id
        });
      }

      navigate('/app'); // Redirecionar para a tela principal
    } catch (error) {
      setError('Falha no cadastro. Verifique suas informações e tente novamente.');
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'Cadastro' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            id="password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p role="alert">{error}</p>}
        <button type="submit">{isRegistering ? 'Cadastrar' : 'Login'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se'}
      </button>
    </div>
  );
};

export default Login;
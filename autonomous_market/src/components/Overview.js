import React from 'react';
import './Overview.css';

const Overview = ({ totalSales, numSales }) => {
    return (
      <section className="overview">
        <h2>Visão geral</h2>
        <div className="graficos"> 
            <div className = "grafico">
                <p>Total de vendas: R$ {totalSales}</p>
                <img src="https://via.placeholder.com/300x200" alt="Grafico vendas" />
            </div>
            <div className = "grafico">
                <p>Nº de vendas: {numSales}</p>
                <img src="https://via.placeholder.com/300x200" alt="Grafico n vendas" />
            </div>
            <div className = "grafico">
                <p>Produtos mais vendidos</p>
                <img src="https://via.placeholder.com/200x200" alt="Grafico produtos" className="rounded-image"/>
            </div>
        </div>
      </section>
    );
  };

export default Overview
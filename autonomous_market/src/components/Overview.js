import React from 'react';
import './Overview.css';
import {Chart  as ChartJS} from  "chart.js/auto";
import {Bar, Line} from "react-chartjs-2"; 

const Overview = ({ totalSales, numSales }) => {
    const data = {
      totalSales: totalSales,
      numSales: numSales,
      revenueData: [350, 300, 400,500],
      productLabels: ["macarrão", "açucar", "arroz"],
      productData: [350, 300, 400]
    };

    return (
      <section className="overview">
      <div className="graficos"> 
        <div className = "grafico">
          <p>Total de vendas: R$ {data.totalSales}</p>
          <Line
            data = {{
            labels: ["Janeiro","fevereiro","Março","Abril"],
            datasets: [
              {
              label: "Receita",
              data: data.revenueData,
              }
            ]
            }}
          />
        </div>
        <div className = "grafico">
          <p>Nº de vendas: {data.numSales}</p>
          <Bar
            data = {{
            labels: data.productLabels,
            datasets: [
              {
              label: "produtos",
              data: data.productData,
              }
            ]
            }}
          />
        </div>
        <div className = "grafico">
          <p>Produtos mais vendidos</p>
          <Bar
            data = {{
            labels: data.productLabels,
            datasets: [
              {
              label: "produtos",
              data: data.productData,
              }
            ]
            }}
          />
        </div>
      </div>
      </section>
    );
  };

export default Overview
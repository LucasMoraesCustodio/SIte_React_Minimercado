import React from 'react';
import './Overview.css';
import {Chart  as ChartJS} from  "chart.js/auto";
import {Bar, Line} from "react-chartjs-2"; 

const Overview = ({ totalSales, numSales }) => {
    return (
      <section className="overview">
        <h2>Visão geral</h2>
        <div className="graficos"> 
            <div className = "grafico">
                <p>Total de vendas: R$ {totalSales}</p>
                <Line
                  data = {{
                    labels: ["Janeiro","fevereiro","Março"],
                    datasets: [
                      {
                        label: "Receita",
                        data: [350, 300, 400],
                      }
                    ]
                  }}
                />
            </div>
            <div className = "grafico">
                <p>Nº de vendas: {numSales}</p>
                <Bar
                  data = {{
                    labels: ["macarrão", "açucar", "arroz"],
                    datasets: [
                      {
                        label: "produtos",
                        data: [350, 300, 400],
                      }
                    ]
                  }}
                />
            </div>
            <div className = "grafico">
                <p>Produtos mais vendidos</p>
                <Bar
                  data = {{
                    labels: ["macarrão", "açucar", "arroz"],
                    datasets: [
                      {
                        label: "produtos",
                        data: [350, 300, 400],
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
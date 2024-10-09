const Overview = ({ totalSales, numSales }) => {
    return (
      <section className="overview">
        <h2>Visão geral</h2>
        <p>Total de vendas: R$ {totalSales}</p>
        <p>Nº de vendas: {numSales}</p>
        {/* Incluir gráficos aqui */}
      </section>
    );
  };

export default Overview
const SalesPoint = ({ name, status, stockSituation, totalSales }) => {
    return (
      <div className="sales-point">
        <h3>{name}</h3>
        <p>Status: {status}</p>
        <p>Situação estoque: {stockSituation}</p>
        <p>Total de vendas: R$ {totalSales}</p>
        {/* Botões para acessar ou configurar o PDV */}
      </div>
    );
  };

export default SalesPoint
import React from "react";
import "./ResultsDisplay.css";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

const ResultsDisplay = ({ data }) => {
  // SUGESTÃO: Verificação para tornar o componente mais robusto
  if (!data) {
    return null;
  }

  return (
    <div className="results-container">
      <h3>Resumo da Simulação</h3>
      <div className="summary-grid">
        {Object.entries(data.resumo).map(([key, value]) => (
          <div className="summary-item" key={key}>
            <span className="summary-key">{key.replace(/_/g, " ")}</span>
            <span className="summary-value">
              {currencyFormatter.format(value)}
            </span>
          </div>
        ))}
      </div>
      <h3 className="table-title">Detalhamento das Parcelas</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Parcela</th>
              <th>Vencimento</th>
              <th>Comissão Bruta (Vendedor)</th>
              <th>Impostos (Vendedor)</th>
              <th>Comissão Líquida (Vendedor)</th>
              <th>Receb. Bruto (Empresa)</th>
              <th>Taxa ADM (Empresa)</th>
            </tr>
          </thead>
          <tbody>
            {data.detalhamento_parcelas.map((item) => (
              <tr key={item.parcela}>
                <td>{item.parcela}</td>
                <td>{formatDate(item.data_vencimento)}</td>
                <td>
                  {currencyFormatter.format(item.comissao_bruta_vendedor)}
                </td>
                <td>{currencyFormatter.format(item.impostos_vendedor)}</td>
                <td>
                  {currencyFormatter.format(item.comissao_liquida_vendedor)}
                </td>
                <td>
                  {currencyFormatter.format(item.recebimento_empresa_parcela)}
                </td>
                <td>{currencyFormatter.format(item.taxa_adm_empresa)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsDisplay;

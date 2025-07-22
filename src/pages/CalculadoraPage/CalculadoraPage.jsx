import React, { useState } from "react";
import axios from "axios";
import CurrencyInput from "../../components/CurrencyInput/CurrencyInput";
import "./CalculadoraPage.css";
import ResultsDisplay from "../../components/ResultsDisplay/ResultsDisplay";

const CalculadoraPage = () => {
  const [formData, setFormData] = useState({
    valor_plano: "",
    valor_entrada: "",
    percentual_comissao: "",
    numero_parcelas: "",
    data_inicio_pagamento: "",
  });

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStandardChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "date" ? value : value === "" ? "" : parseFloat(value),
    }));
  };

  const handleCurrencyChange = (value, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === undefined ? "" : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResultado(null);

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/calculate`;

    try {
      const response = await axios.post(apiUrl, formData);
      setResultado(response.data);
    } catch (err) {
      setError(
        "Não foi possível calcular. Verifique se o backend está rodando ou se os dados estão corretos."
      );
    } finally {
      setLoading(false);
    }

    //CHAMAR A API
  };
  return (
    <div>
      <div className="calculadora-container">
        <h2>Simulador de Comissão</h2>
        <p>Preencha os campos abaixo para simular o cálculo da comissão.</p>

        <form className="commission-form" onSubmit={handleSubmit}>
          <CurrencyInput
            label="Valor do Plano (R$)"
            name="valor_plano"
            value={formData.valor_plano}
            onValueChange={handleCurrencyChange}
            placeholder="R$ 0,00"
          />

          <CurrencyInput
            label="Valor da Entrada (R$)"
            name="valor_entrada"
            value={formData.valor_entrada}
            onValueChange={handleCurrencyChange}
            placeholder="R$ 0,00"
          />

          <div className="form-group">
            <label htmlFor="percentual_comissao">
              Comissão do Vendedor (%)
            </label>
            <input
              type="number"
              id="percentual_comissao"
              name="percentual_comissao"
              value={formData.percentual_comissao}
              onChange={handleStandardChange}
              max="50"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numero_parcelas">Número de Parcelas</label>
            <input
              type="number"
              id="numero_parcelas"
              name="numero_parcelas"
              value={formData.numero_parcelas}
              onChange={handleStandardChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="data_inicio_pagamento">
              Data de Início do Pagamento
            </label>
            <input
              type="date"
              id="data_inicio_pagamento"
              name="data_inicio_pagamento"
              value={formData.data_inicio_pagamento}
              onChange={handleStandardChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Calculando..." : "Calcular"}
          </button>
        </form>
        <div className="results-section">
          {loading && (
            <p className="loading-message">Calculando, por favor aguarde...</p>
          )}
          {error && <p className="error-message">{error}</p>}

          <ResultsDisplay data={resultado} />
        </div>
      </div>
    </div>
  );
};

export default CalculadoraPage;

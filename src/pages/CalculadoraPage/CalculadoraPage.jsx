import React, { useState } from "react";
import "./CalculadoraPage.css";

const CalculadoraPage = () => {
  const [formData, setFormData] = useState({
    valor_plano: "",
    valor_entrada: "",
    percentual_comissao: "",
    numero_parcelas: "",
    data_inicio_pagamento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário a serem enviados: ", formData);

    //CHAMAR A API
  };
  return (
    <div>
      <div className="calculadora-container">
        <h2>Simulador de Comissão</h2>
        <p> Preencha todos os campos abaixo</p>

        <form className="comission-group" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="" className="valor_plano">
              Valor do Plano (R$)
            </label>
            <input
              type="number"
              id="valor_plano"
              name="valor_plano"
              onChange={handleChange}
              placeholder="Ex: 5000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="valor_entrada">Valor da Entrada (R$)</label>
            <input
              type="number"
              id="valor_entrada"
              name="valor_entrada"
              value={formData.valor_entrada}
              onChange={handleChange}
              placeholder="Ex: 1000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="percentual_comissao">
              Comissão do Vendedor (%)
            </label>
            <input
              type="number"
              id="percentual_comissao"
              name="percentual_comissao"
              value={formData.percentual_comissao}
              onChange={handleChange}
              placeholder="Ex: 40"
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
              onChange={handleChange}
              placeholder="Ex: 10"
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
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
};

export default CalculadoraPage;

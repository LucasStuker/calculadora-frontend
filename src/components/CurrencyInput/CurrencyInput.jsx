import React from "react";
import CurrencyInputField from "react-currency-input-field";
import "./CurrencyInput.css";
const CurrencyInput = ({ label, name, value, onValueChange, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <CurrencyInputField
        id={name}
        name={name}
        value={value}
        onValueChange={onValueChange}
        placeholder={placeholder}
        className="currency-input"
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        allowDecimals
        decimalScale={2}
      />
    </div>
  );
};

export default CurrencyInput;

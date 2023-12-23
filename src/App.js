import React, { useState } from 'react';
import './App.css';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('KES');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCalculate = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        setResult((amount * rate).toFixed(2));
      });
  };

  const handleReset = () => {
    setFromCurrency('USD');
    setToCurrency('KES');
    setAmount(1);
    setResult(0);
  };

  return (
    <div className="App">
      <nav className="top-nav">
        <a href="https://www.financingfix.com" className="nav-link">
          Visit Our Website
        </a>
      </nav>
      <div className="ribbon">
        <h1 className="ribbon-heading">CurrencyX Currency Converter</h1>
      </div>
      <div className="calculator">
        <div className="form-group">
          <label htmlFor="from-currency">From</label>
          <select
            id="from-currency"
            className="form-control"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
            <option value="JPY">Japanese Yen</option>
            <option value="KES">Kenyan Shilling</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="AUD">Australian Dollar</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="SAR">Saudi Riyal</option>
            <option value="INR">Indian Rupee</option>
            <option value="RUB">Russian Ruble</option>
            <option value="ZAR">South African Rand</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="SEK">Swedish Krona</option>
            <option value="UGX">Ugandan Shilling</option>
            <option value="TZS">Tanzanian Shilling</option>
            <option value="NGN">Nigerian Naira</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to-currency">To</label>
          <select
            id="to-currency"
            className="form-control"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
            <option value="JPY">Japanese Yen</option>
            <option value="KES">Kenyan Shilling</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="AUD">Australian Dollar</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="SAR">Saudi Riyal</option>
            <option value="INR">Indian Rupee</option>
            <option value="RUB">Russian Ruble</option>
            <option value="ZAR">South African Rand</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="SEK">Swedish Krona</option>
            <option value="UGX">Ugandan Shilling</option>
            <option value="TZS">Tanzanian Shilling</option>
            <option value="NGN">Nigerian Naira</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={handleCalculate}>
            Calculate
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="result">
          {result > 0 && (
            <p>
              {amount} {fromCurrency} = {result} {toCurrency}
            </p>
          )}
        </div>
        <div className="disclaimer">
          <p>
            Disclaimer: We use the mid-market rate for our Converter. This is
            for informational purposes only. You won’t receive this rate when
            sending money.
          </p>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-text">
          Copyright © 2023 FinancingFIX. Email:
          <a href="mailto: info@financingfix.com" className="footer-link">
            info@financingfix.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

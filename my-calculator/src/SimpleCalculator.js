import React, { useState } from "react";

export default function SimpleCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResult(null);
      setError("Please enter valid numbers in both fields.");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult(null);
          setError("Cannot divide by zero.");
          return;
        }
        res = a / b;
        break;
      default:
        setResult(null);
        setError("Invalid operation.");
        return;
    }

    const formatted =
      Math.abs(Math.round(res) - res) < 1e-10 ? String(Math.round(res)) : String(Number(res.toFixed(8)));
    setResult(formatted);
  }

  return (
    <div
      className="simple-calculator"
      style={{
        padding: "20px",
        border: "8px solid #ccc",
        width: "300px",
        background: "lightgreen",
        borderRadius: "8px",
      }}
    >
      <h2>Simple Calculator</h2>

      <input
        aria-label="first number"
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First Number"
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <select
        aria-label="operator"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <option value="+">Add (+)</option>
        <option value="-">Subtract (-)</option>
        <option value="*">Multiply (*)</option>
        <option value="/">Divide (/)</option>
      </select>

      <input
        aria-label="second number"
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second Number"
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button type="button" onClick={calculate} style={{ width: "100%", padding: "10px", marginBottom: "10px" }}>
        Calculate
      </button>

      {error ? (
        <p style={{ color: "crimson", fontWeight: "bold" }}>{error}</p>
      ) : (
        <p id="result" style={{ fontWeight: "bold", fontSize: "16px" }}>
          Result: {result !== null ? result : ""}
        </p>
      )}
    </div>
  );
}
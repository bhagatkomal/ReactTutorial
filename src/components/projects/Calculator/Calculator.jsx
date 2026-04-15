import { useState } from "react";
import "./Calculator.css";

const buttons = [
  "C",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const formatResult = (value) => {
  if (!Number.isFinite(value)) return "Error";

  const roundedValue = Math.round((value + Number.EPSILON) * 1000000000) / 1000000000;
  return Number.isInteger(roundedValue) ? String(roundedValue) : String(roundedValue);
};

export const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const resetCalculator = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setCurrentValue(digit);
      setWaitingForOperand(false);
      return;
    }

    setCurrentValue((prev) => (prev === "0" ? digit : `${prev}${digit}`));
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setCurrentValue("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!currentValue.includes(".")) {
      setCurrentValue((prev) => `${prev}.`);
    }
  };

  const calculateValue = (firstValue, secondValue, nextOperator) => {
    switch (nextOperator) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        return secondValue === 0 ? NaN : firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = Number(currentValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator && !waitingForOperand) {
      const result = calculateValue(previousValue, inputValue, operator);
      const formattedResult = formatResult(result);

      setCurrentValue(formattedResult);
      setPreviousValue(formattedResult === "Error" ? null : Number(formattedResult));
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (operator === null || previousValue === null || waitingForOperand) return;

    const result = calculateValue(previousValue, Number(currentValue), operator);
    const formattedResult = formatResult(result);

    setCurrentValue(formattedResult);
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const toggleSign = () => {
    if (currentValue === "0") return;
    setCurrentValue((prev) => (prev.startsWith("-") ? prev.slice(1) : `-${prev}`));
  };

  const handlePercent = () => {
    const result = Number(currentValue) / 100;
    setCurrentValue(formatResult(result));
    setWaitingForOperand(false);
  };

  const handleButtonClick = (button) => {
    if (!Number.isNaN(Number(button))) {
      inputDigit(button);
      return;
    }

    switch (button) {
      case "C":
        resetCalculator();
        break;
      case ".":
        inputDecimal();
        break;
      case "+/-":
        toggleSign();
        break;
      case "%":
        handlePercent();
        break;
      case "=":
        handleEquals();
        break;
      default:
        handleOperator(button);
        break;
    }
  };

  return (
    <main className="calculator-page">
      <section className="calculator-shell">
        <div className="calculator-copy">
          <p className="calculator-eyebrow">React Project</p>
          <h1>Calculator App</h1>
          <p className="calculator-subtitle">
            A simple calculator with clear, percent, sign toggle, and the four
            main operations.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calculator-display-wrap">
            <p className="calculator-preview">
              {previousValue !== null && operator ? `${previousValue} ${operator}` : "Ready"}
            </p>
            <h2 className="calculator-display">{currentValue}</h2>
          </div>

          <div className="calculator-grid">
            {buttons.map((button) => {
              const isOperatorButton = ["/", "*", "-", "+", "="].includes(button);
              const isWideButton = button === "0";

              return (
                <button
                  key={button}
                  type="button"
                  className={`calculator-button ${isOperatorButton ? "operator" : ""} ${isWideButton ? "wide" : ""}`}
                  onClick={() => handleButtonClick(button)}
                >
                  {button}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

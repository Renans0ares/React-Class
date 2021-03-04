import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState("+");
  const [values, setValues] = useState(["0", "0"]);
  const [current, setCurrent] = useState(1);

  const clearMemory = () => {
    setDisplayValue("");
    setClearDisplay(false);
    setOperation("+");
    setValues(["0", "0"]);
    setCurrent(1);
  };

  const decimalPlaces = 4;

  const addDigit = (digit) => {
    if (digit === "." && displayValue.includes(".")) return;

    setClearDisplay(displayValue === 0 || clearDisplay);
    const currentValue = clearDisplay ? "" : displayValue;
    setDisplayValue(`${currentValue}${digit}`);
    setClearDisplay(false);
  };

  const operationResult = () => {
    // if (current === 1 && operation === "=") return clearMemory;
    // if (clearDisplay) return clearMemory;
    let mainOperation;

    switch (operation) {
      case "+":
        mainOperation = parseFloat(values[0]) + parseFloat(displayValue);
        break;

      case "-":
        mainOperation = parseFloat(values[0]) - parseFloat(displayValue);
        break;

      case "*":
        mainOperation = parseFloat(values[0]) * parseFloat(displayValue);
        break;

      case "/":
        mainOperation = parseFloat(values[0]) / parseFloat(displayValue);
        break;

      default:
        return 0;
    }

    const mainOperationDecimal = mainOperation.toFixed(decimalPlaces);
    const stringMainOperation = String(parseFloat(mainOperationDecimal));

    return stringMainOperation;
  };

  const doOperation = (selectedOperation) => {
    setOperation(selectedOperation);
    if (!displayValue) return;

    if (current === 0) {
      setCurrent(1);
      setClearDisplay(true);

      setValues([
        (values[current] = String(parseFloat(displayValue))),
        String(values[1]),
      ]);
    } else {
      try {
        setValues([operationResult(), "0"]);
      } catch (error) {}

      // if (operation === "=") {
      //   setOperation(null);
      //   // setCurrent(0);
      // } else {
      setOperation(selectedOperation);
      setCurrent(1);
      // }

      setDisplayValue(operationResult());

      if (operation === "=") {
        setClearDisplay(false);
      } else {
        setClearDisplay(true);
      }
    }
  };

  return (
    <CalculatorBody>
      <Display value={displayValue} />
      <Button label="AC" onClick={clearMemory} size="3" />
      <Button label="/" onClick={doOperation} operation />
      <Button label="7" onClick={addDigit} />
      <Button label="8" onClick={addDigit} />
      <Button label="9" onClick={addDigit} />
      <Button label="*" onClick={doOperation} operation />
      <Button label="4" onClick={addDigit} />
      <Button label="5" onClick={addDigit} />
      <Button label="6" onClick={addDigit} />
      <Button label="-" onClick={doOperation} operation />
      <Button label="1" onClick={addDigit} />
      <Button label="2" onClick={addDigit} />
      <Button label="3" onClick={addDigit} />
      <Button label="+" onClick={doOperation} operation />
      <Button label="0" onClick={addDigit} size="2" />
      <Button label="." onClick={addDigit} />
      <Button
        label="="
        onClick={() => {
          doOperation("=");
          alert("Bug");
        }}
        operation
      />
    </CalculatorBody>
  );
};

const CalculatorBody = styled.div`
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
`;

export default Calculator;

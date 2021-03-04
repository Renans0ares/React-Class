import React from "react";
import styled from "styled-components";

const Button = ({ label, onClick, operation, size }) => {
  return (
    <CalculatorButton
      onClick={() => {
        onClick(label);
      }}
      size={size}
      operation={operation}
    >
      {label}
    </CalculatorButton>
  );
};

const CalculatorButton = styled.button`
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
  --bg-operation: #fa8231;
  --bg-operation--active: #fa8231cc;
  --color-operation: #fff;

  font-size: 1.4em;
  color: ${(props) => (props.operation ? "var(--color-operation)" : "black")};
  background-color: ${(props) =>
    props.operation ? "var(--bg-operation)" : "var(--bg-button)"};
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
  grid-column: ${(props) => (props.size ? `span ${props.size}` : `span 1`)};

  :active {
    background-color: ${(props) =>
      props.operation ? "var(--bg-operation--active)" : "#ccc"};
  }
`;

export default Button;

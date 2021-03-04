import React from "react";
import styled from "styled-components";

const Display = ({ value }) => {
  return <CalculatorScreen>{value}</CalculatorScreen>;
};

const CalculatorScreen = styled.div`
  color: white;
  grid-column: span 4;
  background-color: #0004;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
`;

export default Display;

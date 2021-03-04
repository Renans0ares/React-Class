import "./App.css";
import Calculator from "./components/Calculator";
import styled from "styled-components";

function App() {
  return (
    <AppScreen>
      <h1>
        Calculadora <br />
        2077
      </h1>
      <Calculator />
    </AppScreen>
  );
}

const AppScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, rgb(95, 44, 130), rgb(73, 160, 157));

  > h1 {
    color: white;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export default App;

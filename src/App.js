import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button/index";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [primeiroValor, setPrimeiroValor] = useState("");
  const [operador, setOperador] = useState("");
  const [history, setHistory] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setPrimeiroValor("");
    setOperador("");
    setHistory("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleOperation = (op) => {
    if (primeiroValor === "") {
      setPrimeiroValor(currentNumber);
      setHistory(`${currentNumber} ${op}`);
      setCurrentNumber("0");
      setOperador(op);
    } else {
      handleEquals();
      setOperador(op);
    }
  };

  const handleEquals = () => {
    if (primeiroValor !== "" && operador !== "" && currentNumber !== "") {
      const atual = Number(currentNumber);
      const anterior = Number(primeiroValor);
      let resultado;

      switch (operador) {
        case "+":
          resultado = anterior + atual;
          break;
        case "-":
          resultado = anterior - atual;
          break;
        case "x":
          resultado = anterior * atual;
          break;
        case "/":
          resultado = atual !== 0 ? anterior / atual : "Erro";
          break;
        default:
          return;
      }

      setCurrentNumber(String(resultado));
      setHistory(`${primeiroValor} ${operador} ${currentNumber} =`);
      setPrimeiroValor("");
      setOperador("");
    }
  };

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} history={history} />
          <Row>
            <Button />
            <Button />
            <Button />
            <Button label="C" onClick={handleClear} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="/" onClick={() => handleOperation("/")} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="x" onClick={() => handleOperation("x")} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="-" onClick={() => handleOperation("-")} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="." onClick={() => handleAddNumber(".")} />
            <Button label="=" onClick={handleEquals} />
            <Button label="+" onClick={() => handleOperation("+")} />
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default App;

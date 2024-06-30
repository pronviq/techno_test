import { useState } from "react";
import { Button } from "./components/button/Button";
import "./App.css";
import Counter from "./components/counter/Counter";
import { TState } from "./components/button/Button.model";

const App = () => {
  const [button1State, setButton1State] = useState<TState>("enabled");
  const [button2State, setButton2State] = useState<TState>("enabled");
  const [button3State, setButton3State] = useState<TState>("disabled");
  const [button4State, setButton4State] = useState<TState>("enabled");
  const [button5State, setButton5State] = useState<TState>("disabled");
  const [button6State, setButton6State] = useState<TState>("enabled");

  return (
    <div className="app">
      <div className="counters">
        <Counter size={8} counterStyle="primary"></Counter>
        <Counter size={12} counterStyle="primary"></Counter>
        <Counter size={8} pulse={true} counterStyle="primary"></Counter>
        <Counter size={12} pulse={true} counterStyle="primary"></Counter>
        <Counter size={16} counterStyle="primary">
          1
        </Counter>
        <Counter size={20} counterStyle="primary">
          a
        </Counter>
        <Counter size={24} counterStyle="primary">
          333
        </Counter>

        <Counter size={8} counterStyle="secondary"></Counter>
        <Counter size={12} counterStyle="secondary"></Counter>
        <Counter size={8} pulse={true} counterStyle="secondary"></Counter>
        <Counter size={12} pulse={true} counterStyle="secondary"></Counter>
        <Counter size={16} counterStyle="secondary">
          1
        </Counter>
        <Counter size={20} counterStyle="secondary">
          a
        </Counter>
        <Counter size={24} counterStyle="secondary">
          333
        </Counter>
      </div>
      <div className="buttons">
        <Button
          state={button1State}
          onClick={() => setButton1State("loading")}
          size={28}
          buttonStyle="primary"
        >
          <Button.Label>Что сделать</Button.Label>
          <Button.Counter>1</Button.Counter>
        </Button>
        <Button
          state={button2State}
          onClick={() => setButton2State("loading")}
          size={36}
          buttonStyle="primary"
        >
          <Button.Label>Что сделать</Button.Label>
        </Button>
        <Button
          state={button3State}
          onClick={() => setButton3State("loading")}
          size={56}
          buttonStyle="primary"
        >
          <Button.Label>Что сделать</Button.Label>
          <Button.Counter>3</Button.Counter>
        </Button>
      </div>

      <div className="buttons">
        <Button
          state={button4State}
          onClick={() => setButton4State("loading")}
          size={28}
          buttonStyle="secondary"
        >
          <Button.Label>Lorem ipsum, dolor sit amet consectetur</Button.Label>
          <Button.Counter>1</Button.Counter>
        </Button>
        <Button
          state={button5State}
          onClick={() => setButton5State("loading")}
          size={36}
          buttonStyle="secondary"
        >
          <Button.Label>Lorem ipsum, dolor sit amet consectetur</Button.Label>
        </Button>
        <Button
          state={button6State}
          onClick={() => setButton6State("loading")}
          size={56}
          buttonStyle="secondary"
        >
          <Button.Label>Lorem ipsum, dolor sit amet consectetur</Button.Label>
          <Button.Counter>3</Button.Counter>
        </Button>
      </div>
    </div>
  );
};

export default App;

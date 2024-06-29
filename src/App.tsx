import { Button } from "./components/button/Button";
import "./App.css";
import Counter from "./components/counter/Counter";

const App = () => {
  return (
    <div className="app">
      <div className="containers">
        <Counter size={24} quantity="121" />
        <div className="container">
          <span className="container-title">Контейнер 250x150</span>
          <div className="container-content">
            <Button quantity="12" counter={true} buttonStyle="primary" size={28}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} buttonStyle="primary" size={36}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} buttonStyle="primary" size={56}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
          </div>
        </div>
        <div className="container">
          <span className="container-title">Контейнер 250x150</span>
          <div className="container-content">
            <Button quantity="12" counter={true} buttonStyle="secondary" size={28}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} buttonStyle="secondary" size={36}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} buttonStyle="secondary" size={56}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
          </div>
        </div>
        <div className="container">
          <span className="container-title">Контейнер 250x150</span>
          <div className="container-content">
            <Button quantity="12" counter={true} state="loading" buttonStyle="secondary" size={28}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} state="loading" buttonStyle="secondary" size={36}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} state="loading" buttonStyle="secondary" size={56}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
          </div>
        </div>
        <div className="container">
          <span className="container-title">Контейнер 250x150</span>
          <div className="container-content">
            <Button quantity="12" counter={true} state="loading" buttonStyle="primary" size={28}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} state="loading" buttonStyle="primary" size={36}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
            <Button quantity="12" counter={true} state="loading" buttonStyle="primary" size={56}>
              <Button.Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Button.Label>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

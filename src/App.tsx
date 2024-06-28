import { Button } from "./components/button/Button";
import "./App.css";
import Counter from "./components/counter/Counter";

const App = () => {
  // гридом зафигачить контейнеры
  return (
    <div className="app">
      Контейнер 250x150
      <div className="container">
        <Button
          buttonStyle="primary"
          size={56}
          Counter={<Counter size={24} quantity={"1"} />}
          label="Im button!"
        />
      </div>
    </div>
  );
};

export default App;

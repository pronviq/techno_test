import React from "react";
import "./Counter.css";
import { CounterProps } from "./Counter.model";
import { SIZES, STYLES } from "./Counter.config";

const Counter: React.FC<CounterProps> = ({
  counterStyle = "primary",
  size = 16,
  stroke = "false",
  quantity = "1",
  pulse,
}) => {
  if (parseInt(quantity).toString() === quantity && parseInt(quantity) > 99) quantity = "99+";
  if (quantity.length > 3) quantity = quantity.slice(0, 3);
  return (
    <div style={{ ...SIZES[size], ...STYLES[counterStyle] }} className="counter">
      {size > 12 && quantity}
    </div>
  );
};

export default Counter;

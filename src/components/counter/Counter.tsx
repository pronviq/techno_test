import React from "react";
import "./Counter.css";
import { CounterProps } from "./Counter.model";
import { PARENT_STYLES, SIZES, STYLES } from "./Counter.config";
import { useButton } from "../button/Button.context";

const Counter = ({
  counterStyle = "primary",
  size = 8,
  stroke = false,
  children = "",
  pulse = false,
}: CounterProps) => {
  // Берем контекст кнопки, если он есть, устанавливаем цвета и размеры, соответствуещие кнопке
  const buttonContext = useButton();
  const styles = buttonContext ? PARENT_STYLES[buttonContext.buttonStyle] : STYLES[counterStyle];
  if (buttonContext) size = buttonContext.size === 28 ? 16 : buttonContext.size === 36 ? 20 : 24;

  // Обрезаем children, если длина больше 3
  if (parseInt(children).toString() === children && parseInt(children) > 99) children = "99+";
  if (children.length > 3) children = children.slice(0, 3);

  return (
    <div style={{ ...SIZES[size], ...styles } as React.CSSProperties} className="counter">
      {size > 12 ? children : pulse && <Counter.Pulse />}
    </div>
  );
};

export default Counter;

Counter.Pulse = () => (
  <>
    <div className="pulse" data-testId="pulse"></div>
    <div className="pulse2" data-testId="pulse2"></div>
  </>
);

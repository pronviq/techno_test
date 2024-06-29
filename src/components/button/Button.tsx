import React, { useEffect } from "react";
import "./Button.css";
import { ButtonProps, LabelProps } from "./Button.model";
import { SIZES, STYLES } from "./Button.config";
import Counter from "../counter/Counter";

/**
 * Базовый компонент, который сообщает пользователю о действии, которое он может совершить.
 */
export const Button = ({
  buttonStyle = "primary",
  size = 36,
  state = "enabled",
  counter,
  label,
  setState,
  onClick,
  children,
  quantity,
}: ButtonProps) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty("--x", e.pageX - e.currentTarget.offsetLeft + "px");
    e.currentTarget.style.setProperty("--y", e.pageY - e.currentTarget.offsetTop + "px");
  };

  const handleClick = () => {
    state = "loading";
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      tabIndex={state !== "enabled" ? -1 : 1}
      style={{
        ...SIZES[size],
        ...STYLES[buttonStyle],
      }}
      className={"button" + ` ${state}`}
    >
      <div className="button-content">
        {children}
        {label && <Button.Label>{label}</Button.Label>}
        {counter && (
          <Button.Counter
            quantity={quantity}
            counterStyle="parent"
            size={size === 28 ? 16 : size === 36 ? 20 : 24}
          />
        )}
      </div>
      {state === "loading" && <Button.Loader />}
    </button>
  );
};

Button.Label = ({ children }: LabelProps) => {
  return <span className="button-label">{children}</span>;
};

Button.Counter = Counter;
Button.Loader = () => <span className="button-loader" />;

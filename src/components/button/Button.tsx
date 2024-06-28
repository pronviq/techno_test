import React, { ReactNode } from "react";
import "./Button.css";
import { ButtonProps } from "./Button.model";
import { SIZES, STYLES } from "./Button.config";

/**
 * Базовый компонент, который сообщает пользователю о действии, которое он может совершить.
 */
export const Button: React.FC<ButtonProps> = ({
  buttonStyle = "primary",
  size = 36,
  state = "enabled",
  label = "Что сделать",
  setState,
  counter,
  Counter,
  onClick,
}) => {
  return (
    <button
      tabIndex={state !== "enabled" ? -1 : 1}
      style={{ ...SIZES[size], ...STYLES[buttonStyle] }}
      className={"button" + ` ${state}`}
    >
      <div className="button-content">
        {label}
        {Counter}
      </div>
      {state === "loading" && <span className="button-loader" />}
    </button>
  );
};

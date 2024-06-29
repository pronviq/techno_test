import React, { ReactNode, useEffect, useRef, useState } from "react";
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
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleMouseDown = (e: MouseEvent) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    buttonRef.current?.addEventListener("mousedown", handleMouseDown);
    return () => buttonRef.current?.removeEventListener("mousedown", handleMouseDown);
  });

  return (
    <button
      ref={buttonRef}
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

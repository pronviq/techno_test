import React from "react";
import "./Button.css";
import { ButtonProps, LabelProps } from "./Button.model";
import { SIZES, STYLES } from "./Button.config";
import Counter from "../counter/Counter";
import { ButtonContext, useButton } from "./Button.context";

export const Button = ({
  buttonStyle = "primary",
  size = 36,
  state = "enabled",
  onClick,
  children,
}: ButtonProps) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty("--x", e.pageX - e.currentTarget.offsetLeft + "px");
    e.currentTarget.style.setProperty("--y", e.pageY - e.currentTarget.offsetTop + "px");
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    const touch = e.touches[0];
    e.currentTarget.style.setProperty("--x", touch.clientX - e.currentTarget.offsetLeft + "px");
    e.currentTarget.style.setProperty("--y", touch.clientY - e.currentTarget.offsetTop + "px");
  };

  return (
    <button
      data-testid="mybutton"
      disabled={state === "disabled"}
      tabIndex={state !== "enabled" ? -1 : 1}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        ...SIZES[size],
        ...STYLES[buttonStyle],
      }}
      className={"button" + ` ${state}`}
    >
      <ButtonContext.Provider
        value={{
          buttonStyle,
          size,
        }}
      >
        <div data-testid="mybutton-content" className="button-content">
          {children}
        </div>
        {state === "loading" && <span className="button-loader" />}
      </ButtonContext.Provider>
    </button>
  );
};

const Label = ({ children }: LabelProps) => {
  const buttonContext = useButton();
  if (!buttonContext) throw new Error("Label must be used within a Button component");
  return <span className="button-label">{children}</span>;
};

Button.Label = Label;
Button.Counter = Counter;

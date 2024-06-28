import { ReactNode } from "react";

export interface ButtonProps {
  buttonStyle?: TButtonStyle;
  size?: TSize;
  state?: TState;
  setState?: () => void;
  counter?: boolean;
  focused?: boolean;
  label: string;
  Counter?: ReactNode;
  onClick?: () => void;
}

export type TButtonStyle = "primary" | "secondary";
export type TSize = 28 | 36 | 56;
export type TState = "enabled" | "loading" | "disabled" | "pressed";

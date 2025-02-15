import { ReactNode } from "react";

export interface ButtonProps {
  buttonStyle?: TButtonStyle;
  size?: TSize;
  state?: TState;
  children?: ReactNode;
  onClick?: () => void;
  setState?: (s: string) => void;
}

export interface ButtonContextProps {
  size: TSize;
  buttonStyle: TButtonStyle;
}

export interface LabelProps {
  children: string;
}

export type TButtonStyle = "primary" | "secondary";
export type TSize = 28 | 36 | 56;
export type TState = "enabled" | "loading" | "disabled";

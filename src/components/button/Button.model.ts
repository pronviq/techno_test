import { ReactNode } from "react";

export interface ButtonProps {
  buttonStyle?: TButtonStyle;
  size?: TSize;
  state?: TState;
  counter?: boolean;
  children?: ReactNode;
  quantity?: string;
  label?: string;
  onClick?: () => void;
  setState?: (s: string) => void;
}

export interface LabelProps {
  children: string;
}

export type TButtonStyle = "primary" | "secondary";
export type TSize = 28 | 36 | 56;
export type TState = "enabled" | "loading" | "disabled";

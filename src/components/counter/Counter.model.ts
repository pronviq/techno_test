export interface CounterProps {
  counterStyle?: TCounterStyle;
  size?: TSize;
  stroke?: boolean;
  children?: string;
  pulse?: boolean;
}

export type TCounterStyle = "primary" | "secondary";
export type TSize = 8 | 12 | 16 | 20 | 24;

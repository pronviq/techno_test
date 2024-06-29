export interface CounterProps {
  counterStyle?: TCounterStyle;
  size?: TSize;
  stroke?: boolean;
  quantity?: string;
  pulse?: boolean;
}

export type TCounterStyle = "primary" | "secondary" | "parent";
export type TSize = 8 | 12 | 16 | 20 | 24;

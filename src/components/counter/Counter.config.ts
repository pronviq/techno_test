import { TCounterStyle, TSize } from "./Counter.model";

export const STYLES: Record<TCounterStyle, Record<string, string>> = {
  primary: {
    "--counter-background-color": "#2FB675",
    "--counter-color": "white",
  },
  secondary: {
    "--counter-background-color": "#8366561F",
    "--counter-color": "black",
  },
};

export const PARENT_STYLES = {
  primary: {
    "--counter-background-color": "#FFFFFF1F",
    "--counter-color": "white",
  },
  secondary: {
    "--counter-background-color": "#8366561F",
    "--counter-color": "black",
  },
};

export const SIZES: Record<TSize, Record<string, string>> = {
  8: {
    "--counter-horizontal-paddings": "0px",
    "--counter-size": "8px",
    "--counter-stroke-width": "1px",
    "--counter-font-size": "0px",
  },
  12: {
    "--counter-horizontal-paddings": "0px",
    "--counter-size": "12px",
    "--counter-stroke-width": "2px",
    "--counter-font-size": "0px",
  },
  16: {
    "--counter-horizontal-paddings": "4px",
    "--counter-size": "16px",
    "--counter-stroke-width": "2px",
    "--counter-font-size": "11px",
  },
  20: {
    "--counter-horizontal-paddings": "4px",
    "--counter-size": "20px",
    "--counter-stroke-width": "2px",
    "--counter-font-size": "13px",
  },
  24: {
    "--counter-horizontal-paddings": "6px",
    "--counter-size": "24px",
    "--counter-stroke-width": "3px",
    "--counter-font-size": "15px",
  },
};

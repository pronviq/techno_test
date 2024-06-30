import { TButtonStyle, TSize } from "./Button.model";

export const STYLES: Record<TButtonStyle, Record<string, string>> = {
  primary: {
    "--button-background-color": "#FF7700",
    "--button-color": "white",
    "--loader-border-color": "white",
  },
  secondary: {
    "--button-background-color": "#8366561F",
    "--button-color": "black",
    "--loader-border-color": "black",
  },
};

export const SIZES: Record<TSize, Record<string, string>> = {
  28: {
    "--button-horizontal-paddings": "10px",
    "--button-vertical-paddings": "6px",
    "--button-horizontal-gap": "4px",
    "--button-height": "28px",
    "--button-border-radius": "9.3px",
    "--button-font-size": "14px",
    "--loader-size": "16px",
    "--loader-border-radius": "2px",
  },
  36: {
    "--button-horizontal-paddings": "12px",
    "--button-vertical-paddings": "8px",
    "--button-horizontal-gap": "6px",
    "--button-height": "36px",
    "--button-border-radius": "12px",
    "--button-font-size": "16px",
    "--loader-border-radius": "2.5px",
    "--loader-size": "20px",
  },
  56: {
    "--button-horizontal-paddings": "16px",
    "--button-vertical-paddings": "16px",
    "--button-horizontal-gap": "8px",
    "--button-height": "56px",
    "--button-border-radius": "16px",
    "--button-font-size": "18px",
    "--loader-size": "24px",
    "--loader-border-radius": "3px",
  },
};

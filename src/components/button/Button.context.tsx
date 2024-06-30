import { createContext, useContext } from "react";
import { ButtonContextProps } from "./Button.model";

export const ButtonContext = createContext<null | ButtonContextProps>(null);
export const useButton = () => useContext(ButtonContext);

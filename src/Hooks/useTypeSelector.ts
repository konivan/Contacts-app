import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
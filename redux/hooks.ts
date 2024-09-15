import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { ReduxDispatch, ReduxState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`k
export const useReduxDispatch: () => ReduxDispatch = useDispatch;
export const useReduxSelector: TypedUseSelectorHook<ReduxState> = useSelector;

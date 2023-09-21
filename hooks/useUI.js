import { useContext } from "react";
import { UIContext } from "@/context";

export const useUI = () => useContext(UIContext);

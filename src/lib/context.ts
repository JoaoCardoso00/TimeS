import { createContext } from "react";
import { userData } from "./hooks";

export const UserContext = createContext<userData>({ email: null, username: null });

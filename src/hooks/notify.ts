import { useContext } from "react";
import notifyContext, { NotifyContextType } from "../context/notify";

export const useNotify = () => {
  const context = useContext(notifyContext);

  if (!context) {
    throw Error("useNotify should be wrapped by NotifyProvider Component");
  }

  return context;
};

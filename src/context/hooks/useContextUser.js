import { useContext } from "react";
import { ContextUsers } from "../ContextUsers";

export const useContextUser = () => {
  return useContext(ContextUsers);
};

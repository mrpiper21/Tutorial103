import React, { useContext } from "react";

export const UserContext = React.createContext;

type UseUserData = {
  name: "string";
  password: "string";
  location: "string";
};

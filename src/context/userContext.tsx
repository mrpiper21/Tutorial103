import React, { createContext, useState, useContext } from "react";

interface UserData {
  user: {
    name: string;
    role: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      role: string;
    }>
  >;
}

//Enums
export const UserRole = {
  ADMIN: "Admin",
  USER: "User",
  NAME: "John Doe",
};

const UserContext = createContext<UserData | undefined>(undefined);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState({
    name: UserRole.NAME,
    role: UserRole.USER,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

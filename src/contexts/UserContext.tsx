import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  auth: boolean;
}

interface UserContextType {
  user: User;
  login: (name: string) => void;
  logout: () => void;
}

const defaultUser: User = { name: '', auth: false };

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
});

export const useUserContext = () => {
  return useContext(UserContext)
}

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  // Login updates the user data with a name parameter
  const login = (name: string) => {
    setUser({
      name: name,
      auth: true,
    });
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(defaultUser);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

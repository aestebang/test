import React, { createContext, use, useEffect, useState } from "react";
import useDeleteUser from "../hooks/useDeleteUser";

export const ContextUsers = createContext();

const ContextUsersProvider = ({ children }) => {
  const [userData, setUser] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const values = { userData,getUsers };
  return (
    <ContextUsers.Provider value={values}>{children}</ContextUsers.Provider>
  );
};

export default ContextUsersProvider;

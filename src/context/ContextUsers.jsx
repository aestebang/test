import React, { createContext, useEffect, useState } from "react";

export const ContextUsers = createContext();

const ContextUsersProvider = ({ children }) => {
  const [userData, setUser] = useState([]);
  // console.log("desde context", userData);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const values = { userData, getUsers };
  return (
    <ContextUsers.Provider value={values}>{children}</ContextUsers.Provider>
  );
};

export default ContextUsersProvider;

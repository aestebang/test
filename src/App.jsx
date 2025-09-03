import Users from "./components/Users";

import "./App.css";
import { useEffect, useState } from "react";
import users from "./services/users.service";
import { useStoreUser } from "./context/store/useStoreUser";

function App() {
  const { getUsers } = useStoreUser();

  useEffect(() => {
    getUsers();
  }, []);

  return <Users />;
}

export default App;

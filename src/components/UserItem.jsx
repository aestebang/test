import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDeleteUser from "../hooks/useDeleteUser";
import { useContextUser } from "../context/hooks/useContextUser";
import filterUser from "../utils/filterUser";
import Count from "./Count";
import UserList from "./UserList";

const UserItem = () => {
  const { userData, getUsers } = useContextUser();
  const { deleteUser, userDelete } = useDeleteUser(userData);

  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [count, setCount] = useState(0);

  const filterUserMemo = useMemo(() => filterUser(userData), [userData]);
  // console.log("desdeitemfilter", filterUserMemo);

const renderCount = () => {
    console.log("render count button");
  }

  const increment = useCallback(() => {
    // console.log("increment");
    setCount((prevState) => prevState + 1);
  }, []);

  // const increment = () => {
  //   // console.log("increment");
  //   setCount((prevState) => prevState + 1);
  // };

  useEffect(() => {
    console.log("¿cambió la referencia de increment?", increment);
  }, [increment]);
  // const filterUserCallback = useCallback(() => {
  //   return filterUser(userData);
  // }, [userData]);

  //useMemo
  //useCallback
  //memo

  // useEffect(() => {
  //   // console.log("desdeitem eliminado", userDelete);
  //   getUsers();
  // }, [userDelete]);

  return (
    <div>
      <button onClick={() => deleteUser(1)}>Delete</button>
      <button onClick={() => renderCount()}>render</button>
      {/* {filterUserMemo.map((user) => (
        <div key={user.id}>
          {user.id} - {user.title}
        </div>
      ))} */}
      <hr />
      {userData.id} - {userData.title}
      <Count increment={increment} />
      <UserList filterUserMemo={filterUserMemo} />
      {/* <hr />
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button> */}
    </div>
  );
};

export default UserItem;

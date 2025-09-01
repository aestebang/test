import React, { useEffect, useMemo, useState } from "react";
import useDeleteUser from "../hooks/useDeleteUser";
import { useContextUser } from "../context/hooks/useContextUser";
import filterUser from "../utils/filterUser";

const UserItem = () => {
  const { userData, getUsers } = useContextUser();
  const { deleteUser, userDelete } = useDeleteUser(userData);
  // console.log("desdeitem", userData);
  const [datosFiltrados, setDatosFiltrados] = useState([]);

  // console.log("fileruserxxx", filterUser(userData));

  const filterUserMemo = useMemo(() => filterUser(userData), [userData]);
  console.log("desdeitemfilter", filterUserMemo);

  
  // useEffect(() => {
  //   // console.log("desdeitem eliminado", userDelete);
  //   getUsers();
  // }, [userDelete]);

  return (
    <div>
      <button onClick={() => deleteUser(1)}>Delete</button>
      {filterUserMemo.map((user) => (
        <div key={user.id}>
          {user.id} - {user.title}
        </div>
      ))}
      <hr />
      {userData.id} - {userData.title}
    </div>
  );
};

export default UserItem;

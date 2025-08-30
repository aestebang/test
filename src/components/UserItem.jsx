import React, { useEffect } from "react";
import useDeleteUser from "../hooks/useDeleteUser";
import { useContextUser } from "../context/hooks/useContextUser";

const UserItem = () => {
  const { userData, getUsers } = useContextUser();
  const { deleteUser, userDelete } = useDeleteUser(userData);
  // console.log("desdeitem", userData);
  
  useEffect(() => {
    // console.log("desdeitem eliminado", userDelete);
    getUsers();
  }, [userDelete]);

  return (
    <div>
      <button onClick={() => deleteUser(1)}>Delete</button>
      {userData.id} - {userData.title}
    </div>
  );
};

export default UserItem;

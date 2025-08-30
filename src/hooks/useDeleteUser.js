import React, { useState } from "react";

const useDeleteUser = (userData) => {
  const [userDelete, setUserDelete] = useState(null);

  // console.log("desdehook", userData);
  // console.log("desdehookdelete", userDelete);

  const deleteUser = (id) => {
    const newUser = [userData].filter((user) => user.id !== id);
    setUserDelete(newUser);
  };

  return { userDelete, deleteUser };
};

export default useDeleteUser;

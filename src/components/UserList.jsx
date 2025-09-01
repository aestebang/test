import { memo } from "react";

const UserList = memo(({ filterUserMemo }) => {
  console.log("render UserList");
  console.log("filterUserMemo ref:", filterUserMemo);

  return (
    <div>
      <h2>User List</h2>
      {filterUserMemo.map((user) => (
        <div key={user.id}>
          {user.id} - {user.title}
        </div>
      ))}
    </div>
  );
});

export default UserList;

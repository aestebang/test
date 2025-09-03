import { act, memo, useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "cinco":
      return state + action.payload;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UserList = memo(({ filterUserMemo }) => {
  // console.log("render UserList");
  // console.log("filterUserMemo ref:", filterUserMemo);

  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('stateReducer',state);
  

  return (
    <div>
      <h2>User List</h2>
      <hr /> <h3>Count: {state}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "cinco", payload: 5 })}>
        +5
      </button>
      <hr />
      {/*
       */}
      {filterUserMemo.map((user) => (
        <div key={user.id}>
          {user.id} - {user.title}
        </div>
      ))}
    </div>
  );
});

export default UserList;

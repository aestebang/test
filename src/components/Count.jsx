import { memo } from "react";

const Count = memo(({ increment }) => {
  console.log("render count");
  return (
    <div>
      <hr />
      {/* <h2>Count: {count}</h2> */}
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default Count;

import Child from "./Child";

function Parent({ users, onUserSelect }) {
  return <Child user={users[0]} onUserSelect={onUserSelect} />;
}

export default Parent;

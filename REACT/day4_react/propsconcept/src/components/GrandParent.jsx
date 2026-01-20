import Parent from "./Parent";

function GrandParent() {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Sara", email: "sara@gmail.com" },
  ];

  const handleUserSelect = (user) => {
    console.log("Selected:", user);
  };

  return (
    <Parent users={users} onUserSelect={handleUserSelect} />
  );
}

export default GrandParent;

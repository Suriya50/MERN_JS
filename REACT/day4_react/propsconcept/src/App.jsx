import UserCard from "./components/Usercard";
// import Button from "./components/Button";
// import CounterApp from "./components/CounterApp.jsx";
// import GrandParent from "./components/GrandParent.jsx/index.js";
// import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      {/* Task 1 */}
      <UserCard
        name="Surya"
        age={20}
        city="Chennai"
        isAdmin={true}
      />

      {/* Task 2 */}
      {/* <Button
        label="Click Me"
        onClick={() => alert("Button clicked")}
      /> */}

      {/* Task 3 */}
      {/* <CounterApp /> */}

      {/* Task 4 */}
      {/* <GrandParent /> */}

      {/* Task 5 */}
      {/* <UserForm
        initialData={{ name: "Surya", email: "surya@gmail.com" }}
        onSubmit={(data) => console.log(data)}
      /> */}
    </>
  );
}

export default App;


import Usecounter from "../components/Usecounter"; // make sure path is correct

const App = () => {
  const { count, increment, decrement, reset } = Usecounter(0);

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: "5px", padding: "10px 20px" }}>+</button>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px 20px" }}>-</button>
      <button onClick={reset} style={{ margin: "5px", padding: "10px 20px" }}>Reset</button>
    </div>
  );
};

export default App;

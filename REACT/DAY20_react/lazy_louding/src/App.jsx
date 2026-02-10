import React, { useState, useRef, useReducer, useEffect, lazy, Suspense } from "react";

// Lazy load Results
const Results = lazy(() => import("./Results"));

// Reducer for history
const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD": return [action.payload, ...state];
    case "CLEAR": return [];
    default: return state;
  }
};

const App = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [history, dispatch] = useReducer(historyReducer, []);
  const timer = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (e.target.value.trim() !== "") {
        setCount(c => c + 1);
        dispatch({ type: "ADD", payload: e.target.value });
      }
    }, 1000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Debounced Search + History</h2>
      <input
        ref={inputRef}
        value={text}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{ padding: 5 }}
      />
      <button onClick={() => dispatch({ type: "CLEAR" })} style={{ marginLeft: 10 }}>
        Clear History
      </button>

      <div style={{ marginTop: 20 }}>
        <h4>History:</h4>
        <ul>
          {history.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>

      <Suspense fallback={<p>Loading Results...</p>}>
        <Results searchText={text} searchCount={count} />
      </Suspense>
    </div>
  );
};

export default App;

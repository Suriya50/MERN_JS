// src/App.jsx

import { ThemeProvider } from "./context/ThemeContext";
import Themetoggle from "./components/Themetoggle";


function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Simple Theme Switcher</h1>
       <Themetoggle/>
      </div>
    </ThemeProvider>
  );
}

export default App;

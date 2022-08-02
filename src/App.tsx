import React from "react";
import { Login } from "./pages/Login"
import { globalCss } from "./stitches.config";
import 'bootstrap/dist/css/bootstrap.min.css';

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});

function App() {
  globalStyles();
  
  return (
    <div>
      <Login />
    </div>
  )
}

export default App

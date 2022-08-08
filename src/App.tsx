import React from "react";
import { globalCss } from "./stitches.config";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "@/router/routes";

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});

function App() {
  globalStyles();
  
  return <Router />
}

export default App

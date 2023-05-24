import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./components/InitialPageComponent/InitialPage.css";
import "./components/QuestionComponent/QuestionBox.css";
import "./components/EndScreenComponent/EndScreen.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

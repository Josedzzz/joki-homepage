import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import ProjectsPanel from "./components/ProjectsPanel";

function App() {
  const [window, setWindow] = useState("home");

  const toggleWindow = (windowName) => {
    setWindow(windowName);
  };

  return (
    <div className="bg-custom-dark min-h-screen">
      <Header toggleWindow={toggleWindow} window={window} />
      {window === "home" && <Home />}
      {window === "about-me" && <Aboutme />}
      {window === "project" && <ProjectsPanel />}
    </div>
  );
}

export default App;

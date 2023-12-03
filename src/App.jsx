import "./App.css";
import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleAddProject = () => {
    setProjectState((prevState) => {
      return {  ...prevState , selectedProject: null};
    });
  };
  let content;
  if (projectState.selectedProject === null) {
    content = <NewProject />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main>
      <ProjectSidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;

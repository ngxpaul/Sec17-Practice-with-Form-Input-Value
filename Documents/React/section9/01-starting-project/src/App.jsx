import { NewProject } from "./components/NewProject";
import {NoProjectSelected} from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected/>
    </main>
  );
}

export default App;
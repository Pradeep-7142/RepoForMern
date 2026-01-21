import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>TaskSphere</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;

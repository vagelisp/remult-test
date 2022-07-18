import { useEffect, useState } from "react";
import { remult } from "./common";
import { Task } from "./shared/Task";

const taskRepo = remult.repo(Task);

async function fetchTasks() {
  return taskRepo.find();
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.completed} />
          {task.title} - {task.description}
        </div>
      ))}
    </div>
  );
}

export default App;

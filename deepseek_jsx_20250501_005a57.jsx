import { useState } from 'react';
import TaskGrid from './components/TaskGrid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "طراحی UI",
      description: "طراحی رابط کاربری صفحه اصلی",
      createdAt: new Date().toLocaleDateString('fa-IR'),
      creator: "محمد رضایی",
      completed: false,
      completedBy: ""
    }
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">مدیریت تسک‌های پروژه</h1>
      <TaskGrid tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
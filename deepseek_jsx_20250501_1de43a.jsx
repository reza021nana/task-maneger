import { useState } from 'react';
import { motion } from 'framer-motion';
import TaskTile from './TaskTile';
import TaskModal from './TaskModal';
import AddTask from './AddTask';

const TaskGrid = ({ tasks, setTasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleComplete = (taskId, completedBy) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: true, completedBy } 
        : task
    ));
    setSelectedTask(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-4">
        {tasks.map(task => (
          <TaskTile 
            key={task.id} 
            task={task} 
            onClick={() => setSelectedTask(task)}
          />
        ))}
      </div>

      <button 
        onClick={() => setShowAddTask(true)}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        +
      </button>

      {selectedTask && (
        <TaskModal 
          task={selectedTask} 
          onClose={() => setSelectedTask(null)}
          onComplete={handleComplete}
        />
      )}

      {showAddTask && (
        <AddTask 
          onClose={() => setShowAddTask(false)}
          onAdd={newTask => setTasks([...tasks, newTask])}
        />
      )}
    </div>
  );
};

export default TaskGrid;
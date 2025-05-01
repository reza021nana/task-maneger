import { motion } from 'framer-motion';

const TaskTile = ({ task, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`w-16 h-16 ${task.completed ? 'bg-green-100' : 'bg-white'} 
                 rounded-lg shadow-md flex items-center justify-center 
                 cursor-pointer p-2 overflow-hidden`}
    >
      <p className="text-xs text-center font-medium text-gray-700">
        {task.title}
      </p>
    </motion.div>
  );
};

export default TaskTile;
import { motion } from 'framer-motion';

const TaskModal = ({ task, onClose, onComplete }) => {
  const [completedBy, setCompletedBy] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-white rounded-lg w-full max-w-md p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">تاریخ ایجاد</label>
            <p className="mt-1 text-gray-900">{task.createdAt}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">شرح</label>
            <p className="mt-1 text-gray-900">{task.description}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">ایجادکننده</label>
            <p className="mt-1 text-gray-900">{task.creator}</p>
          </div>

          {!task.completed && (
            <div>
              <label className="block text-sm font-medium text-gray-500">
                نام انجام دهنده
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                value={completedBy}
                onChange={(e) => setCompletedBy(e.target.value)}
              />
              <button
                onClick={() => onComplete(task.id, completedBy)}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                ثبت تکمیل تسک
              </button>
            </div>
          )}

          {task.completed && (
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-green-800 font-medium">
                تکمیل شده توسط: {task.completedBy}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TaskModal;
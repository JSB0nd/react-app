import { useState } from 'react';
import './App.css';
import Task01 from './components/Task01.jsx';
import Task02 from './components/Task02.jsx';

function App() {
  const [selectedTask, setSelectedTask] = useState('');

  const renderTask = () => {
    switch (selectedTask) {
      case 'Task01':
        return <Task01 />;
      case 'Task02':
        return <Task02 />;
      default:
        return <p>Выберите задание из спиcка</p>;
    }
  };

  return (
    <>
      <div>
        <h1 className='title'>Мои React-задания:</h1>
        <select value={selectedTask} className='tasks' onChange={(e) => setSelectedTask(e.target.value)}>
          <option value="">-- Выберите Задание --</option>
          <option value="Task01">JSX 🆕</option>
          <option value="Task02">Props ♻️</option>

        </select>
      </div>
      <div>
        <h1 className='title'>Ответ:</h1>
        {renderTask()}
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Task01 from './components/Task01.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h1>Мои React-задания:</h1>
        <Task01 />

      </div>
    </>
  );
}

export default App;

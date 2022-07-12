import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

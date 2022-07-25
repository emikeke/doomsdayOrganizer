/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TodoList from './components/TodoList';
import Error from './components/Error';

function App() {

  return (
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path="/doomsdayOrganizer" element={<TodoList/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

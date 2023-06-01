import './App.css'
import HomePage from './pages/HomePage';
import EditTask from './components/Forms/EditTask';
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/:id/edit' element={<EditTask />} />
       </Routes>
    </div>
  );
}

export default App;

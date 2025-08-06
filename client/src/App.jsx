import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import ReviewPage from './pages/ReviewPage'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/review' element={<ReviewPage />} />
      <Route path='/review/:category/:buiness' element={<ReviewPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
      </Router>
    </>
  );
}

export default App;

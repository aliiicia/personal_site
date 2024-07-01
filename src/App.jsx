import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  const toggleMode = () => {
    if (lightMode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121212';
      showAlert('Dark mode has been enabled')
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled')
    }
  }
  const [lightMode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Navbar title="Word-Converter" mode={lightMode} toggle={toggleMode} Home="Home" About="About" />
        <Alert mode={alert} />
        <Routes>
          <Route exact path="/" element={<Textarea createAlert={showAlert} className="my-2" mode={lightMode} heading="Enter a text to change" />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

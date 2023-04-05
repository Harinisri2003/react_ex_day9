
import './App.css';
import Topbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Singer from './pages/singer/Singer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Album from './pages/album/Album';

function App() {
  return (
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" exact element={<Homepage/>}></Route> 
      <Route path="/album" element={<Album /> } ></Route>
      <Route path="/singer" element={  <Singer /> } ></Route>
      
    </Routes>
  </Router>
  );
}

export default App;

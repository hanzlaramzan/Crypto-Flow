import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import Navbar from './Navbar'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
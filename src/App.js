
import './App.css';
import About from './components/about';
import Header from './components/Header';
import Footer from './components/Footer';
import Ourstory from './components/Ourstory';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Ourstory" element={<Ourstory />} />
      </Routes>
      <Footer />
    </Router>
  );
}


























export default App;

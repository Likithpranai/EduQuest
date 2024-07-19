import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./Components/Pages/Skills";
import OnlineCourses from "./Components/Pages/OnlineCourses";
import InternshipTracker from "./Components/Pages/InternshipTracker";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/online-courses" element={<OnlineCourses />} />
          <Route path="/internship-tracker" element={<InternshipTracker />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

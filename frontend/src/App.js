import "./App.css";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<br />} />
          <Route path="/edit/:id" element={<br />} />
          <Route path="/create" element={<br />} />
          <Route path="/user" element={<br />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { AccountList } from "./components/AccountList";
import { EditAccount } from "./components/EditAccount";
import { CreateAccount } from "./components/CreateAccount";
import { CreateUser } from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar />

        <Routes>
          <Route path="/" element={<AccountList />} />
          <Route path="/edit/:id" element={<EditAccount />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

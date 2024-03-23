import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import HomePage from "../HomePage/HomePage";
import EquipmentPage from "../EquipmentPage/EquipmentPage";
import JournalPage from "../JournalPage/JournalPage";
import JournalFormPage from "../JournalFormPage/JournalFormPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <div className="container-fluid bg-secondary min-vh-100 ">
        <div className="row ">
          {user ? (
            <>
              <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                <NavBar user={user} setUser={setUser} />
              </div>

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/equipment" element={<EquipmentPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/journals/new" element={<JournalFormPage />} />
              </Routes>
            </>
          ) : (
            <AuthPage setUser={setUser} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;

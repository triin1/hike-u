import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../../components/NavBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import HomePage from "../HomePage/HomePage";
import EquipmentPage from "../EquipmentPage/EquipmentPage";
import JournalPage from "../JournalPage/JournalPage";
import JournalFormPage from "../JournalFormPage/JournalFormPage";
import JournalDetailPage from "../JournalDetailPage/JournalDetailPage";
import JournalEditPage from "../JournalEditPage/JournalEditPage";
import Layout from "../../components/Layout/Layout";
import HikePage from "../HikePage/HikePage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      {user ? (
        <Layout user={user} setUser={setUser}>
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journals/new" element={<JournalFormPage />} />
              <Route path="/adventures" element={<HikePage />} />
              <Route path="/journals/:id" element={<JournalDetailPage />} />
              <Route path="/journals/:id/edit" element={<JournalEditPage />} />
            </Routes>
          </>
        </Layout>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;

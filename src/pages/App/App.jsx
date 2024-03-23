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
import Layout from "../../components/Layout/Layout";

// function App() {
//   const [user, setUser] = useState(getUser());

//   return (
//     <div className="App">
//       <main className="container">
//         <div className="container-fluid bg-secondary min-vh-100 ">
//           <div className="row ">
//             {user ? (
//               <>
//                 <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//                   <NavBar user={user} setUser={setUser} />
//                 </div>
//                 <Routes>
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/equipment" element={<EquipmentPage />} />
//                   <Route path="/journal" element={<JournalPage />} />
//                   <Route path="/journals/new" element={<JournalFormPage />} />
//                 </Routes>
//               </>
//             ) : (
//               <AuthPage setUser={setUser} />
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
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
            </Routes>
          </>
        </Layout>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;

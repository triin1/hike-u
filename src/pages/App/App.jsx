import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../../components/AuthPage/AuthPage';
import NewOrderPage from '../../components/NewOrderPage/NewOrderPage';
import OrderHistroryPage from '../../components/OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={< NewOrderPage /> } />
            <Route path="/orders" element={ < OrderHistroryPage /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

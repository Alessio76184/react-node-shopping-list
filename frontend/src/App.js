import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ShoppingList from './ShoppingList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/list" />
            ) : (
              <Login onLoginSuccess={() => setIsLoggedIn(true)} />
            )
          }
        />
        <Route
          path="/list"
          element={
            isLoggedIn ? <ShoppingList /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

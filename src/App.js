import "./App.css";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ProtectedRoute } from "./pages/ProtectedRoute";
import { useAuth } from "./pages/useAuth";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="container">
      <Router>
        <Routes>
          {/* Redirect to Dashboard if already logged in on the base URL */}
          {isAuthenticated ? (
            <Route path="/" element={<Navigate to="/dashboard" />} />
          ) : (
            <Route path="/" element={<SignIn />} />
          )}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth/Auth";
import LoginView from "./views/LoginView";
import UserView from "./views/UserView";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<UserView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

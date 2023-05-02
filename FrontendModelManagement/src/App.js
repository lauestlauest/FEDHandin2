import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
//import { LoginView } from '../views/LoginView';
//import { Managerview } from '../views/ManagerView';

// Needs protected routes when login is implemented
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/login" element={<LoginView />} />
      {/* Manager Routes */}
      <Route path="/manager" element={<Managerview />} />
      {/* Model Routes */}
      <Route path="/model" element={<Modelview />} />
    </Route>
  )
);

function App() {
  return <div className="App"></div>;
}

export default App;

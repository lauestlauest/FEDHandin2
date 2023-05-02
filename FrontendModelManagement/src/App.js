import "./App.css";
import React from 'react'
import {AddUserForm} from "./component/AddUserForm"
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";
//import LoginView from "./views/LoginView";
// import { Managerview } from "./views/ManagerView";
// import { ModelView } from "./views/ModelView";

// Needs protected routes when login is implemented
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route path="/login" element={<LoginView />} />
//       {/* Manager Routes */}
//       {/* <Route path="/manager" element={<Managerview />} /> */}
//       {/* Model Routes */}
//       {/* <Route path="/model" element={<ModelView />} /> */}
//     </Route>
//   )
// );

function App() {
  return (
    //<RouterProvider router={router}>
      <div className="App">
        <p>Hej Frontend</p>
        <h1>dddd</h1>
        <AddUserForm/>
      </div>
    //</RouterProvider>
  );
}

export default App;

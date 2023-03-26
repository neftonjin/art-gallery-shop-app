
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import Navbar from './components/Navbar';
import { Search } from "./pages/Search";
import * as React from 'react';
import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
// import UploadForm from "./components/UploadForm";

// import Album from './testComponents/Album';
// import SignIn from './testComponents/SignIn';



export default function App() {


  const {currentUser}=useContext(AuthContext)
  const RequireAuth = ({children})=> {
   return currentUser ? children : <Navigate to="/" />;
  }
  console.log(currentUser);
  return (<>
    <div className="App">
      <Navbar />
      
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Login"  element={<Login />} />
          <Route path="/User" element={<RequireAuth><User /></RequireAuth>  } />
          <Route path="/Search" element={<Search />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      
      
    </div>
    </>
  );
}


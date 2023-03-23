
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import Navbar from './components/Navbar';
import { Search } from "./pages/Search";
import * as React from 'react';
// import Album from './testComponents/Album';
// import SignIn from './testComponents/SignIn';



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Search" element={<Search />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}


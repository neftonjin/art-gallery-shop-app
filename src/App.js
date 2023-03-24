
import { Routes, Route } from "react-router";
import ResponsiveAppBar from './components/Navbar';
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import * as React from 'react';
// import Album from './testComponents/Album';
// import SignIn from './testComponents/SignIn';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
    </div>
  );
}

export default App;

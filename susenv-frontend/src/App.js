import React from 'react';
import Home from './Components/Home/Home';
import Profile from './Components/Profile';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
       </Routes>
    </div>
  );
}

export default App;
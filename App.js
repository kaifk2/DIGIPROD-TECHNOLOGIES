// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import Home from './components/Home';
import Carousel from './components/Carousel';
import LineChart from './components/LineChart';
import Map from './components/Map'; // Adjusted import statement

const App = () => {
  return (
    <Router>
      <div>
        <BottomNavigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/LineChart" element={<LineChart />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

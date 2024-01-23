// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CarouselScreen from './components/CarouselScreen';
import PieChartScreen from './components/PieChartScreen';
// ... import other screens

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carousel" component={CarouselScreen} />
        <Route path="/pie-chart" component={PieChartScreen} />
        {/* Add routes for other screens */}
      </Switch>
    </Router>
  );
};

export default Routes;

import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      {/* <Dinner /> */}
      <Dinner DishName="Nihari" SweetDish="rice pudding"/>

      <hr/>

      <Dinner DishName="biryani" SweetDish="custard"/>
    </div>
  );
}

export default App;

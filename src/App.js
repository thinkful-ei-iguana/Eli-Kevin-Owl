import React from 'react';
import './index.css';
import Stage from './stage';
import store from "./store";
import Sidebar from './sidebar'

function App() {
  return ( <section className="main-section">
    <Sidebar store={store}></Sidebar>
    <Stage store={store}></Stage>
  </section> );
}

export default App;

import React from 'react';
import './index.css';
import Participants from './participants';
import Stage from './stage';
import Chat from './chat';
import store from "./store";
import Sidebar from './sidebar'

function App() {
  return ( <section>
    <Sidebar store={store}></Sidebar>
    <Stage store={store}></Stage>
  </section> );
}

export default App;

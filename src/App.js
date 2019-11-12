import React from 'react';
import './index.css';
import Participants from './participants';
import Stage from './stage';
import Chat from './chat';
import store from "./store";

function App() {
  return ( <section>
    <Participants store={store}></Participants>
    <Stage store={store}></Stage>
    <Chat store={store}></Chat>
  </section> );
}

export default App;

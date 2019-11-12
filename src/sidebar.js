import React from 'react';
import Participants from './participants';
import Chat from './chat';
import $ from 'jquery';

function Sidebar(props) {
    function toggle(argument) {
        if (argument === 'chat') {
            $('.all-participants').hide()
            $('.all-chat').show()
        } else {
            $('.all-chat').hide()
            $('.all-participants').show()
        }
        }
    return ( <section className="stage-sidebar">
        <div className="sidebar-controls">
            <button onClick = {()=> toggle('chat')} className="side-button">Chat</button>
            <button onClick = {()=> toggle('participants')}className="side-button">Participants</button>
        </div>
        <Participants store={props.store}></Participants>
        <Chat store={props.store}></Chat>
    </section> );
}


export default Sidebar

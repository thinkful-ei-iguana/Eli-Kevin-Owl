import React from 'react';
import Participants from './participants';
import Chat from './chat';
import $ from 'jquery';

function Sidebar( props ) {
  function toggle( ev, argument ) {
    Array.from( document.getElementsByClassName( 'side-button' ) ).forEach( el => el.classList.remove( 'active' ) );

    ev.target.classList.add( 'active' );
    if ( argument === 'chat' ) {
      $( '.all-participants' ).hide()
      $( '.all-chat' ).show()
    } else {
      $( '.all-chat' ).hide()
      $( '.all-participants' ).show()
    }
  }
  return ( <section className="stage-sidebar">
    <div className="sidebar-controls">
      <button onClick={( ev ) => toggle( ev, 'chat' )} className=" side-button">Chat</button>
      <button className="active side-button" onClick={( ev ) => toggle( ev, 'participants' )}>Participants</button>
    </div>
    <Participants store={props.store}></Participants>
    <Chat store={props.store}></Chat>
  </section> );
}

export default Sidebar

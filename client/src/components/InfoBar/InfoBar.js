import React from 'react';


import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">


    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        {/* <a class="navbar-item" href="/">
          <i class="fas fa-long-arrow-alt-left fa-2x"></i>
        </a> */}

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div className="leftInnerContainer">

            <h2>Room {room}   <i class="far fa-circle"></i></h2>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <div className="rightInnerContainer">
                <a href="/join">
                  <i class="far fa-times-circle fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div >


);

export default InfoBar;



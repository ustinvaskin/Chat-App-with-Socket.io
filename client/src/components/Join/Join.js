import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (

    <div class="container is-fluid" id="content">
      <section data-section-id="1" data-component-id="29e6_12_02_awz" data-category="sign-in" class="section">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column is-5 is-4-desktop">
              <form>
                <div class="field">
                  <div class="control">
                    <input placeholder="Name" className="input" type="text" onChange={(event) => setName(event.target.value)} />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input placeholder="Room" className="input" type="text" onChange={(event) => setRoom(event.target.value)} />
                  </div>
                </div>
                <div class="field is-grouped">
                  <Link to={'/'}>
                    <button class="button is-danger is-back" data-config-id="primary-action">Back</button>
                  </Link>
                  <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button class="button is-danger is-fullwidth" data-config-id="primary-action">Join !</button>
                  </Link>

                </div>
                <p data-config-id="terms">By signing in you agree with the <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </section >
    </div >

  );
}



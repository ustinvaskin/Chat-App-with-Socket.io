import React from 'react';


import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div class="card">
    <div class="card-content">
      <p class="title">
        ChatME <i class="far fa-comments"></i>
      </p>

      <p class="subtitle">
        {
          users
            ? (
              <div>
                <h1>People are currently chatting:</h1>
                <div className="activeContainer">
                  <h2>
                    {users.map(({ name }) => (
                      <div key={name} className="activeItem">
                        {name}
                        <i class="far fa-circle"></i>
                        is Online
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            )
            : null
        }
      </p>
    </div>
  </div >
);

export default TextContainer;



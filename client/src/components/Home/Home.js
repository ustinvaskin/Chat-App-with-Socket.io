import React from 'react'
import { Link } from "react-router-dom";


import './Home.css';

const Home = () => (
  <div class="box">
    <div class="split">
      <i class="far fa-comments fa-2x"></i> <i class="fas fa-user-friends fa-2x"></i><i class="fas fa-paragraph fa-2x"></i>
      < Link to={'/join'} >
        <span>Click to Join ></span>
      </Link >
    </div>
  </div>
)
export default Home



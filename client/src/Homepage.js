import React, { Component } from "react";
import './assets/app.css';
import './assets/axis.woff';
import logo from './assets/logo.png';

class Homepage extends Component {
  render() {
    return (
      <div>
  <div className="cover">
    <div className="page-title">
      <img className="logo" src={logo} alt="couvertown logo" />
      <h1>we are couvertown</h1>
    </div>
  </div>
  <div className="container">
      <div className="blurb">
          <h1>from british columbia to the world.</h1>
          <p>Couvertown is a community of designers and creators who, through our work, seek to create beautiful things and weave a common thread through the social fabric of Vancouver.</p>
          <p>We believe in the dreamers, the free spirits, the young, the old, the locals, the immigrants &mdash; anyone who seeks the dream of the Pacific Northwest.</p>
          <p>We're here to capture and celebrate the special moments of daily life, promote the communal bonds that join us all together, help our neighbours in need, and share Vancouver's urban pride with ourselves and with the world.</p>

          <h1>don't be a stranger.</h1>
          <p>Say hi at <a href="mailto:hello@couvertown.com">hello@couvertown.com</a>.</p>
      </div>
  </div>
<div class="container">
    <div class="footer">
      <ul class="footer-nav">
        <li><a href="https://instagram.com/couvertown"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://github.com/couvertown"><i class="fab fa-github"></i></a></li>
      </ul>
        <span class="copyright">&copy; couvertown.</span>
    </div>
</div>

      </div>
    );
  }
}

export default Homepage;

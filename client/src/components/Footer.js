import React, { Component } from "react";

import BoxLogo from "../assets/logo-box.png";

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="container">
          <div class="col">
            <div class="logo-box">
              <img src={BoxLogo} alt="couvertown logotype" />
              <small>From British Columbia to the world.</small>
            </div>
            <ul class="footer-nav">
              <li><a href="mailto:hello@couvertown.com"><i class="far fa-hand-peace"></i> hello@couvertown.com</a></li>
              <li><a href="https://instagram.com/couvertown"><i class="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="https://twitter.com/couvertown"><i class="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://github.com/couvertown"><i class="fab fa-github"></i> GitHub</a></li>
            </ul>
          </div>
          <div class="col"></div>
          <div class="right col">
        <span class="copy">Couvertown Design Collective { new Date().getFullYear() }. All rights reserved.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

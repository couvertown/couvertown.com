import React, { Component } from "react";

import Logo from "./assets/logo-header.png";

class Header extends Component {
  render () {
    return (
      <div class="header">
        <a href="#"><img src={Logo} alt="Couvertown logo" /></a>
        <ul class="header-nav">
        </ul>
      </div>
    );
  }
}

export default Header;

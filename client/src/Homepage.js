import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import './assets/app.css';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cover">
          <div className="cover-content">
          <h1>Pardon our dust</h1>
          <p class="blurb">We've been hard at work getting ready for our online launch. We've also been taking some time to enjoy beautiful BC.<br/><a href="https://instagram.com/couvertown" target="blank">Follow us on Instagram for updates &rarr;</a></p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;

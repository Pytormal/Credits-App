import React from "react";
import { Link } from "react-router-dom";

import "./styles/timer.css";

class Home extends React.Component {
  state = {
    user: { user_name: "Alex Andrew" },
  };

  render() {
    // let user = JSON.parse(sessionStorage.getItem('userName'))
    return (
      <div className="title-wrapper" id="title_container">
        <div className="title-card">
          <section className="welcome-title">
            <h1 className="title">Welcome</h1>
            <span id="WelcomeUser">{`${this.state.user.user_name},`}</span>
            <p className="home-p">what would you like to do?</p>
          </section>

          <div className="home-links links">
            <Link to="/login">Login</Link>
            <Link to="/Polls-hub">Polls</Link>
            {/* <Link to="/upload-song">Upload Songs here</Link> */}
            <Link to="/timers">Timers</Link>
            <Link to="broadcasts">Watch Broadcasts</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

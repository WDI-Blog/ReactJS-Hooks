import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <i
              className="fab fa-react"
              style={{
                color: "#fff",
                fontSize: "25px",
                marginRight: "10px",
              }}
            ></i>
            <span className="navbar-brand">ReactJS</span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <span className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">Features</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">Pricing</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">About</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
export default Header;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper>
          <nav
            className="navbar navbar-expand-lg navbar-light "
            style={{
              background: "rgb(255,67,98)"
            }}
          >
            <a className="navbar-brand" href="#">
              Architect
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active" style={{ marginLeft: "20px" }}>
                  <a className="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item" style={{ marginLeft: "20px" }}>
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item" style={{ marginLeft: "20px" }}>
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </NavWrapper>
      </React.Fragment>
    );
  }
}

const NavWrapper = styled.div`
  font-family: "Poppins";
`;

export default Navbar;

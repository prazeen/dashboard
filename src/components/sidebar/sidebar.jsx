import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <SideNav
          style={{
            paddingBottom: "100px",
            marginTop: "54px",
            display: " block",
            backgroundColor: "#D92550"
          }}
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <Link to="/">
                  <i
                    className="fa fa-fw fa-home"
                    style={{ fontSize: "1.75em" }}
                  />
                </Link>
              </NavIcon>
              <NavText>
                <Link to="/">Home</Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="elements">
              <NavIcon>
                <i className="fas fa-gem" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Elements</NavText>
              <NavItem eventKey="elements/buttons">
                <NavText>
                  <Link to="/buttons">Buttons</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/dropdowns">
                <NavText>
                  <Link to="/dropdowns">Dropdowns</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/icons">
                <NavText>
                  <Link to="/icons">Icons</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/badges">
                <NavText>
                  <Link to="/badges">Badges</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/cards">
                <NavText>
                  <Link to="/cards">Cards</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/list-groups">
                <NavText>
                  <Link to="/list-groups">List Groups</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/navigation-menus">
                <NavText>
                  <Link to="/navigation-menu">Navigation Menu</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="elements/utilities">
                <NavText>
                  <Link to="/utilities">Utilities</Link>
                </NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="components">
              <NavIcon>
                <i className="fa fa-car" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Components</NavText>

              <NavItem eventKey="components/tabs">
                <NavText>
                  <Link to="/tabs">Tabs</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="components/accordions">
                <NavText>
                  <Link to="/accordions">Accordions</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="components/notifications">
                <NavText>
                  <Link to="/notifications">Notifications</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="components/modals">
                <NavText>
                  <Link to="/modals">Modals</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="components/progress-bar">
                <NavText>
                  <Link to="/progress-bar">Progress Bar</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="components/tooltips">
                <NavText>
                  <Link to="/tooltips">Tools and Tips</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="components/carousel">
                <NavText>
                  <Link to="/carousel">Carousel</Link>
                </NavText>
              </NavItem>
            </NavItem>
            <NavItem>
              <NavIcon>
                <Link to="/dashboard">
                  <i class="fas fa-clipboard" style={{ fontSize: "1.75em" }} />
                </Link>
              </NavIcon>
              <NavText>
                <Link to="/dashboard">Dashboard Boxes</Link>
              </NavText>
            </NavItem>
            <NavItem>
              <NavIcon>
                <Link to="/form-control">
                  <i class="fas fa-mouse" style={{ fontSize: "1.75em" }} />
                </Link>
              </NavIcon>
              <NavText>
                <Link to="/form-control">Form Control</Link>
              </NavText>
            </NavItem>
            <NavItem>
              <NavIcon>
                <Link to="/form-layout">
                  <i class="fas fa-pen" style={{ fontSize: "1.75em" }} />
                </Link>
              </NavIcon>
              <NavText>
                <Link to="/form-layout">Form Layout</Link>
              </NavText>
            </NavItem>
            <NavItem>
              <NavIcon>
                <Link to="/form-validation">
                  <i class="fas fa-check" style={{ fontSize: "1.75em" }} />
                </Link>
              </NavIcon>
              <NavText>
                <Link to="/form-validation">Form Validation</Link>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </SidebarWrapper>
    );
  }
}

const SidebarWrapper = styled.div`
  background-color: "blue";
  font-family: "Poppins";
`;

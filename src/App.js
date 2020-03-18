import React, { Component } from "react";
import Navbar from "./components/navigation/navbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/Home/home";
import Buttons from "./components/Elements/buttons";
import Badges from "./components/Elements/badges";
import Cards from "./components/Elements/cards";
import Dropdowns from "./components/Elements/dropdowns";
import Icons from "./components/Elements/icons";
import ListGroups from "./components/Elements/listGroups";
import NavigationMenu from "./components/Elements/navigationMenu";
import Utilities from "./components/Elements/utilities";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/badges" component={Badges} />
          <Route path="/cards" component={Cards} />
          <Route path="/dropdowns" component={Dropdowns} />
          <Route path="/icons" component={Icons} />
          <Route path="/list-groups" component={ListGroups} />
          <Route path="/navigation-menu" component={NavigationMenu} />
          <Route path="/utilities" component={Utilities} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./_components/_shared/_header/header.component";
import Footer from "./_components/_shared/_footer/footer.component";
import { Route, Switch } from "react-router-dom";
import CarsList from "./_components/_carslist/carslist.component";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" component={CarsList} exact />
              <Route path="/carshow" component={CarsList} />
            </Switch>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

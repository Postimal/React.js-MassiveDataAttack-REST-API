import React, { Component } from "react";
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Post from "./components/Post";
import About from "./components/About";
// import LoginForm from "./components/LoginForm";
import ValidatedLoginForm from "./components/ValidatedLoginForm";
import store from './components/store';


class App extends Component {
  state = {
    isToggleOn: false
  }

  showMenu = () => {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }
                    // w Route propsy przekazujemy dajac metode render to najlepszy sposób tj.7 liniej niżej, dałem tam funkcje z App.js
                    // showMenu (jest tam pobierana z propsów), która mi zmienia State, który przekazałem także do Navbaru i ternatory operator zadządza
  render() {
    return (
      <Provider  store={store}>
         <BrowserRouter>
          <div>
            <Navbar isToggleOn={this.state.isToggleOn}/>
            <Switch>
              <Route exact path="/"  render={(props) => <ValidatedLoginForm {...props} showMenu={this.showMenu} />} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/:post_id" component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;

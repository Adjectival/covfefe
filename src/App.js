import React, { Component } from 'react';


import { Router, browserHistory, Route, Link } from 'react-router';


import logo from '../public/images/covfefe_icon.png';
import './App.css';

const Page = ({ title, words }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Covfefe Roasters!</h1>
        <h3>{title}</h3>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        How about this word: {words}.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home" words="covfefe"/>
);

const About = (props) => (
  <Page title="About" words="C0VF3F3"/>
);

const Settings = (props) => (
  <Page title="Settings" words="CoVfEfe"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}


export default App;

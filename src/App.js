import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;

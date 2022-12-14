import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}

export default App;

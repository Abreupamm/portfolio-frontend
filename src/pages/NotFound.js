import React from 'react';
import iconNotFound from '../images/server-control.png';

class NotFound extends React.Component {
  render() {
    const stylePage = {
      height: '100vh',
      'background-color': '#000',
      'text-align': 'center',
    };

    const styleImg = {
      display: 'block',
      margin: '0 auto',
      width: '30%'
    };

    const styleText = {
      color: " #ded5df",
      'font-family': 'Nunito, sans-serif',
    }
    return (
      <div style={stylePage}>
        <img alt="icon not found" src={iconNotFound} style={styleImg} />
        <h3 style={styleText}>PÁGINA NÃO ENCONTRADA</h3>
      </div>
    );
  }
}

export default NotFound;

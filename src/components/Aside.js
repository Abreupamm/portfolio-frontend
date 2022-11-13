import { Component } from "react";
import '../CSS/aside.css';

class Aside extends Component {
  render() {
    const { position } = this.props;
    return(
      <div className={ `aside ${position}` }/>
    );
  }
}

export default Aside;
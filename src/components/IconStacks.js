import { Component } from "react";
import { getStacksImage } from "../utils/getStacks";

class IconStacks extends Component {
  state = getStacksImage;
  render() {
    const { stacks } = this.props;
    return(
      <div>
        { stacks.map((stack) => (<img key={stack} alt={`icon stack ${stack}`} src={this.state[stack]}/>)) }
      </div>
    );
  }
}

export default IconStacks;
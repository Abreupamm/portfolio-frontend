import { Component } from 'react';
import '../CSS/components/projectsCard.css';

class ProjectsCard extends Component {
  handleOnClick = () => {
    const { history, data: {id} } = this.props;
    history.push(`projects-details/${id}`)
  }

  createdBackgoundImage = (url) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
  });

  render() {
    const {
      data: { image, name },
    } = this.props;
    let style;
    image !== '' && (style = this.createdBackgoundImage(image));
    return (
      <div style={style} className="container-projects">
        <div className="div-button">
          <button onClick={this.handleOnClick} >Detalhes</button>
        </div>
        <span>{name}</span>
      </div>
    );
  }
}

export default ProjectsCard;

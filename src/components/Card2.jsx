import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link } from "react-router-dom";

class Card2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.setState({ isFlipped: e});
  }

  render() {
    return (
      <div onMouseOver={() => this.handleClick(true)} onMouseOut={() => this.handleClick(false)}>
        <Link to={`/ShowBrand/${this.props.id}`}>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className={`card ${this.props.className}`} key="front">
            <div className="card-body">
              <img
                src={this.props.img}
                className="card-img-top img-marca"
                alt="img1"
              />
            </div>
          </div>
            <div className="card" key="back">
              <div className="card-body align-card-middle d-flex-block">
                <h2 className="card-title">{this.props.title}</h2>
                <p className="card-text">{this.props.text}</p>
              </div>
            </div>
          </ReactCardFlip>
        </Link>
      </div>
    );
  }
}

export default Card2;
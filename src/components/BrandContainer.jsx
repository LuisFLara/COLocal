import React from 'react';
import { all } from '../services/colocal_api';

class BrandContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandContent: {}
    }
  }

  componentDidMount() {
    all().then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    console.log(this.props.state);
    return <p>{this.props.id}</p>;
  }
}

export default BrandContainer;
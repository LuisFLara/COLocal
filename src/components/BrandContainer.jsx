import React from 'react';
import { all, search_user_data } from '../services/colocal_api';

search_user_data(10).then(res => { console.log(res) })
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
    return <p>{this.props.id}</p>;
  }
}

export default BrandContainer;
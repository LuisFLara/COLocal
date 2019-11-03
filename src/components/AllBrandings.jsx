import React from 'react';
import CardContainer from './CardContainer';
import { get_brands } from '../services/colocal_api';

class AllBrandings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandContent: [],
    }
  }

  componentDidMount() {
    get_brands().then((res) => {
      this.setState((state, props) => {
        return{
          brandContent: res.data.datos
        }
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <CardContainer data={this.state.brandContent} />
    );
  }
}

export default AllBrandings;
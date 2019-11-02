import React from 'react';
import { all } from '../services/colocal_api';

all();

const Title = (props) => {
  return (
    <h1>{props.children}</h1>
  )
}

export default Title;
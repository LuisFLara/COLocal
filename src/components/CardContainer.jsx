import React from 'react';
import Card from './Card2';

const renderCards = (data) => {
  return data.map((element) => {
    return <Card cardContent={element} className="m-2" key={element.id_marca} id={element.id_marca} />;
  });
}

const CardContainer = (props) => {
  return(
    <div className="d-flex w-1100 center m-auto flex-wrap" id="brands">
      {renderCards(props.data)}
    </div>
  );
}

export default CardContainer;
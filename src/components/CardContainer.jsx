import React from 'react';
import Card from './Card2';

const exampleData = [
  {
    "name": "hackorama",
    "text": "Hackathon de colima",
    "image": "https://app-hackorama.herokuapp.com/assets/hackorama_logo-30707c7284f591d01236796c8e09b3af5ce5c17491588b3f27b8e0be6c54a594.svg"
  },
  {
    "name": "Michelada.io",
    "text": "Empresa de desarrollo de software",
    "image": "https://michelada.io/images/v3/logo.svg"
  },
  {
    "name": "Treehouse",
    "text": "Empresa de desarrollo de software",
    "image": "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/68999777_2431686900249343_2264771422373019648_o.jpg?_nc_cat=109&_nc_oc=AQmKrvgDJtpnF_4lW9s6MssVUDWXkRvJFCMWl1KZvq_lr6fXGq8oAA5acZh3btJ3YOE&_nc_ht=scontent.fgdl3-1.fna&oh=52a0a142af63c94dad3a9318148add0d&oe=5E5854B3"
  },
  {
    "name": "Density Labs",
    "text": "Empresa de desarrollo de software",
    "image": "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/50919578_2127765803935902_6727312029977149440_n.png?_nc_cat=102&_nc_oc=AQm09hHy1O34fcyL9RuB4V97OAu382BWtI3s9L2kqIr9Zanx0HBc74knHu_EPZ5JY9c&_nc_ht=scontent.fgdl3-1.fna&oh=ff7e5f9bbab299fc75a32eeec2b81e26&oe=5E1BFA12"
  },
  {
    "name": "Pinturas de Colima",
    "text": "Venta de pinturas",
    "image": "img/marcas/pinturas_de_colima.jpeg"
  },
  {
    "name": "hackorama",
    "text": "Hackathon de colima",
    "image": "https://app-hackorama.herokuapp.com/assets/hackorama_logo-30707c7284f591d01236796c8e09b3af5ce5c17491588b3f27b8e0be6c54a594.svg"
  }
]

const renderCards = () => {
  return exampleData.map((element, index) => {
    return <Card text= {element.text} title={element.name} img={element.image} className="m-2" key={index} id={index} />;
  });
}

const CardContainer = (props) => {
  return(
    <div className="d-flex w-1100 center m-auto flex-wrap" id="brands">
      {renderCards()}
    </div>
  );
}

export default CardContainer;
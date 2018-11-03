import React from 'react';
import Card from '../SenateCard';
import './SenateContainer.css'

const SenateContainer = ({senators}) => {
    let uuidv4 = require("uuid/v4");
    const displaySenators = senators.map((senator) => {
        return (
          <Card
            senator={senator}
            key={uuidv4()}
          />
        );
      });
    return(
      <div>
          <h1 class='container-title'>Your Senators</h1>
          <h1 className='card-container'>{displaySenators}</h1>
      </div>
    )
}

export default SenateContainer;
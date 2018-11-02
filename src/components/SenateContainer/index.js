import React from 'react';
import Card from '../SenateCard'

const SenateContainer = ({congressmen, senators}) => {
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
          <h1>{displaySenators}</h1>
      </div>
    )
}

export default SenateContainer;
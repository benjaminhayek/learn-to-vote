import React from 'react';
import Card from '../SenateCard';
import './SenateContainer.css'

const SenateContainer = ({senators}) => {
    let uuidv4 = require("uuid/v4");
    const selectedCount = senators.filter(senator => senator.selected)
    const displaySelected = selectedCount.map(senator => (
      <Card 
        senator={senator}
        key={uuidv4()}
      />
    ));
    const displaySenators = senators.map((senator) => {
        return (
          <Card
            senator={senator}
            key={uuidv4()}
          />
        );
      });
      console.log(displaySelected)
    return(
      <div>
        {
          selectedCount &&
          <div>
            <h1 className='container-title'>{selectedCount ? 'You have Selected' : ''}</h1>
            <h1 className='card-container'>{displaySelected}</h1>
          </div>
        }
        <div>
            <h1 class='container-title'>Your Senators</h1>
            <h1 className='card-container'>{displaySenators}</h1>
        </div>
      </div>
    )
}

export default SenateContainer;
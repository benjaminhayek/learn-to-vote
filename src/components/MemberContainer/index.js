import React from 'react';
import Card from '../MemberCard';
import './MemberContainer.css';

const MemberContainer = ({congressmen}) => {
    let uuidv4 = require("uuid/v4");
    const selectedCount = congressmen.filter(member => member.selected)
    const displaySelected = selectedCount.map(congressmen => (
      <Card 
        congressmen={congressmen}
        key={uuidv4()}
      />
    ));
    const displayMembers = congressmen.map((congressmen) => {
        return (
          <Card
            congressmen={congressmen}
            key={uuidv4()}
          />
        );
      });
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
            <h1 class='container-title'>Your Congressmen</h1>
            <h1 className='card-container'>{displayMembers}</h1>
        </div>
      </div>
    )
}

export default MemberContainer;
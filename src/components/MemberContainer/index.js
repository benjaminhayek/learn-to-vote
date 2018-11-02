import React from 'react';
import Card from '../MemberCard';
import './MemberContainer.css';

const MemberContainer = ({congressmen, senators}) => {
    let uuidv4 = require("uuid/v4");
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
          <h1 className='card-container'>{displayMembers}</h1>
      </div>
    )
}

export default MemberContainer;
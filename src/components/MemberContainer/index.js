import React from 'react';
import Card from '../MemberCard'

const MemberContainer = ({senators, congressmen}) => {
    let uuidv4 = require("uuid/v4");
    const displayMembers = congressmen.map((congressmen) => {
        return (
          <Card
            congressmen={congressmen}
            key={uuidv4()}
          />
        );
      });
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
            <h1>{displayMembers}</h1>
            <h1>{displaySenators}</h1>
        </div>
    )
}

export default MemberContainer;
import React, { Component } from 'react';
import Card from '../SenateCard';
import { senateEducationBills } from '../../utils/dataCleaners';
import './SenateContainer.css';

class SenateContainer extends Component {
  constructor() {
    super()
  }
  handleSubmit = async (event) => {
    const { senators } = this.props
    const selectedCount = senators.filter(senator => senator.selected)
    const poop = await senateEducationBills(selectedCount[0].id, selectedCount[1].id)
    console.log(poop)
  }
  render() {
    const { senators } = this.props
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
    const showButton = selectedCount.length >= 1 ? true : false    
    return(
      <div>
        {
          showButton &&
          <div>
            <h1 className='container-title'>{selectedCount ? 'You have Selected' : ''}</h1>
            <h1 className='card-container'>{displaySelected}</h1>
            <button onClick={this.handleSubmit}>Compare Senators</button>
          </div>
        }
        <div>
            <h1 className='container-title'>Your Senators</h1>
            <h1 className='card-container'>{displaySenators}</h1>
        </div>
      </div>
    )
  }
}

export default SenateContainer;
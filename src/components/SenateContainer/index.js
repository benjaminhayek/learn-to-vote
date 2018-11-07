import React, { Component } from 'react';
import Card from '../../containers/SenateCard';
import { educationBills } from '../../utils/dataCleaners';
import SenateBillsCard from '../SenateBillsCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loadingGif from '../../utils/assets/loading-gif.gif';
import comparePic from '../../utils/assets/debate.svg';
import './SenateContainer.css';

export class SenateContainer extends Component {
  constructor() {
    super()
    this.state = {
      bills: [],
      loading: false
    }
  }
  handleSubmit = async (event) => {
    this.setState({loading: true})
    const { senators } = this.props;
    const selectedCount = senators.filter(senator => senator.selected)
    const senateBills = await educationBills(selectedCount[0].id, selectedCount[1].id, 'senate')
    const displaySenateBill = senateBills.map(bills => ({
      title: bills.title,
      committee: bills.committees,
      url: bills.url,
      position1: bills.position1[0].position,
      position2: bills.position2[0].position,
    }))
    this.setState({bills: displaySenateBill, loading: false})
  }
  render() {
    const { loading } = this.state;
    const { senators } = this.props;
    let uuidv4 = require("uuid/v4");
    const selectedCount = senators.filter(senator => senator.selected)
    const displaySelected = selectedCount.map(senator => (
      <Card 
        senator={senator}
        key={uuidv4()}
      />
    ));
    const displayBills = this.state.bills.map(bill => {
      return (
        <SenateBillsCard 
          bills={bill}
          key={uuidv4()}
        />
      )
    })
    const displaySenators = senators.map((senator) => {
        return (
          <Card
            senator={senator}
            key={uuidv4()}
          />
        );
      });
    
    const showButton = selectedCount.length >= 1 ? true : false
    if(loading){
      return (<div className='load'> 
                <img alt='load' className='load-image'src={loadingGif} /> 
              </div>)
    } else { 
    return(
      <div>
        {
          showButton &&
          <div>
            <Link to='/compareSenate' style={{ textDecoration: 'none' }}>
              <h1 className='container-title'>{selectedCount ? 'You have Selected' : ''}</h1>
              <h1 className='card-container'>{displaySelected}</h1>
              <h1 className='bill-container'>{displayBills}</h1>
              <button className='compare-btn' onClick={this.handleSubmit}><img alt='compare-pic' className='compare-pic' src={comparePic}/>Compare Senators</button>
            </Link>
          </div>
        }
        <div>
          <Link to='/senators' style={{ textDecoration: 'none' }}>
            <h1 className='container-title'>Your Senators</h1>
            <h1 className='card-container'>{displaySenators}</h1>
          </Link>
        </div>
      </div>
    )
    }
  }
}

SenateContainer.propTypes = {
  bills: PropTypes.object,
  senators: PropTypes.array
}

export default SenateContainer;
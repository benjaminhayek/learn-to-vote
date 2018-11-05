import React, { Component } from 'react';
import Card from '../../containers/MemberCard';
import MemberBillsCard from '../MemberBillsCard';
import './MemberContainer.css';
import { Link, Route } from 'react-router-dom';
import { educationBills } from '../../utils/dataCleaners';
import PropTypes from 'prop-types';

export class MemberContainer extends Component {
    constructor() {
      super()
      this.state = {
        bills: []
      }
    }
    resetState = () => {
      this.setState({bills: []})
    }
    handleSubmit = async (event) => {
    const { congressmen } = this.props
    const selectedCount = congressmen.filter(member => member.selected)
    const memberBills = await educationBills(selectedCount[0].id, selectedCount[1].id)
    const displayMembersBill = memberBills.map(bills => ({
      title: bills.title,
      committee: bills.committees,
      url: bills.url
    }))
    if(displayMembersBill.length) {
    this.setState({bills: displayMembersBill})
    } else {alert('there are no bills to compare')}
  }
    render() {
    const { congressmen } = this.props;
    let uuidv4 = require("uuid/v4");
    const selectedCount = congressmen.filter(member => member.selected)
    const isEnabled = selectedCount.length === 2;
    const displaySelected = selectedCount.map(congressmen => (
      <Card 
        congressmen={congressmen}
        key={uuidv4()}
      />
    ));
    const displayBills = this.state.bills.map(bill => {
      return (
        <MemberBillsCard 
          bills={bill}
          key={uuidv4()}
        />
      )
    })
    const displayMembers = congressmen.map((congressmen) => {
        return (
          <Card
            congressmen={congressmen}
            key={uuidv4()}
          />
        );
      });
    const showButton = selectedCount.length >= 1 && selectedCount.length < 3  ? true : false
    return(
      <div>
        {
          showButton &&
          <div>
            <Link to='/compareCongress' style={{ textDecoration: 'none' }}>
              <h1 className='container-title'>{selectedCount ? 'You have Selected' : ''}</h1>
              <h1 className='card-container'>{displaySelected}</h1>
              <h1>{displayBills}</h1>
              <button onClick={this.handleSubmit} disabled={!isEnabled}>Compare Congressmen</button>
            </Link>
          </div>
        }
          <div>
            <h1 className='container-title'>Your Congressmen</h1>
            <h1 className='card-container' onClick={this.resetState}>{displayMembers}</h1>
          </div>
      </div>
    )
  }
}

MemberContainer.propTypes = {
  congressmen: PropTypes.array,
  bills: PropTypes.array
}


export default MemberContainer;
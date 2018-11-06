import React, { Component } from 'react';
import Card from '../../containers/MemberCard';
import MemberBillsCard from '../MemberBillsCard';
import './MemberContainer.css';
import { Link } from 'react-router-dom';
import { educationBills } from '../../utils/dataCleaners';
import PropTypes from 'prop-types';
import loadingGif from '../../utils/assets/loading-gif.gif';
import comparePic from '../../utils/assets/debate.svg';

export class MemberContainer extends Component {
    constructor() {
      super()
      this.state = {
        bills: [],
        loading: false
      }
    }
    resetState = () => {
      this.setState({bills: []})
    }
    handleSubmit = async () => {
    this.setState({loading: true})
    const { congressmen } = this.props
    const selectedCount = congressmen.filter(member => member.selected)
    const memberBills = await educationBills(selectedCount[0].id, selectedCount[1].id, 'house')
    const displayMembersBill = memberBills.map(bills => ({
      title: bills.title,
      committee: bills.committees,
      url: bills.url
    }))
    if(displayMembersBill.length) {
    this.setState({bills: displayMembersBill, loading: false})
    } else {alert('there are no bills to compare')}
  }
    render() {
    const { congressmen } = this.props;
    const { loading } = this.state;
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
    if(loading){
      return (<div className='load'> 
                <img alt='load-img' className='load-image'src={loadingGif} /> 
              </div>)
    } else {
    return(
      <div>
        {
          showButton &&
          <div>
            <Link to='/compareCongress' style={{ textDecoration: 'none' }}>
              <h1 className='container-title'>{selectedCount ? 'You have Selected' : ''}</h1>
              <h1 className='card-container'>{displaySelected}</h1>
              <h1 className='bill-container'>{displayBills}</h1>
              <button onClick={this.handleSubmit} className='compare-btn' disabled={!isEnabled}><img alt='compare-pic' className='compare-pic' src={comparePic}/>Compare Congressmen</button>
            </Link>
          </div>
        }
          <div>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h1 className='container-title'>Your Congressmen</h1>
              <h1 className='card-container' onClick={this.resetState}>{displayMembers}</h1>
            </Link>
          </div>
      </div>
      )
    }
  }
}

MemberContainer.propTypes = {
  congressmen: PropTypes.array,
  bills: PropTypes.array
}


export default MemberContainer;
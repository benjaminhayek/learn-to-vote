import React, { Component } from 'react';
import Card from '../../containers/MemberCard';
import MemberBillsCard from '../../components/MemberBillsCard';
import './MemberContainer.css';
import { Link } from 'react-router-dom';
import { educationBills } from '../../utils/dataCleaners';
import PropTypes from 'prop-types';
import loadingGif from '../../utils/assets/loading-gif.gif';
import comparePic from '../../utils/assets/debate.svg';
import { connect } from 'react-redux';
import { clearSelected } from '../../actions';

export class MemberContainer extends Component {
    constructor() {
      super()
      this.state = {
        bills: [],
        loading: false
      }
    }

    resetState = () => {
      this.props.clearSelected()
      this.setState({bills: []})
    }

    handleSubmit = async () => {
    this.setState({loading: true})
    const { congressmen } = this.props;
    const error = 'Sorry, these congressmen have no education bills in common'
    const selectedCount = congressmen.filter(member => member.selected)
    const memberBills = await educationBills(selectedCount[0].id, selectedCount[1].id, 'house')
    const displayMembersBill = memberBills.map(bills => ({
      title: bills.title,
      committee: bills.committees,
      url: bills.url,
      position1: bills.position1[0].position,
      position2: bills.position2[0].position,
    }))
    if(displayMembersBill.length) {
        this.setState({bills: displayMembersBill, loading: false})
      } else {
        this.setState({bills: [{title: error}], loading: false})
      }
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
          <div className='comparing-container'>
              <h1 className='container-title'>{selectedCount ? 'You have Selected' : ''}</h1>
              <h1 className='card-container'>{displaySelected}</h1>
              <h1 className='bill-container'>{displayBills}</h1>
            <Link to='/compareCongress' style={{ textDecoration: 'none' }}>
              <button onClick={this.handleSubmit} className='compare-btn' disabled={!isEnabled}><img alt='compare-pic' className='compare-pic' src={comparePic}/>Compare Congressmen</button>
            </Link>
          </div>
        }
          <div>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <h1 className='container-title'>Your Congressmen</h1>
              <h1 className='card-container' onClick={selectedCount.length > 1 ? this.resetState : null}>{displayMembers}</h1>
            </Link>
          </div>
      </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  selected: state.selected,
})

export const mapDispatchToProps = (dispatch) => ({
  clearSelected: () => dispatch(clearSelected())
})

MemberContainer.propTypes = {
  congressmen: PropTypes.array,
  bills: PropTypes.array
}


export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SenateBillsCard.css';

export class SenateBillsCard extends Component {

    render() {
        const { bills } = this.props     
        return(
            <div className='bills-container'>
                <h1 className='committee'>Committee: {bills.committee}</h1>
                <h2 className='bill-title'>Title: {bills.title}</h2>
                <h2 className='position'>Senator 1: {bills.position1}</h2>
                <h2 className='position'>Senator 2: {bills.position2}</h2>
                <a className='url' href={bills.url}>Click here for more info</a>
            </div>
        )
    }
}

SenateBillsCard.propTypes = {
    bills: PropTypes.object
  }

export default SenateBillsCard
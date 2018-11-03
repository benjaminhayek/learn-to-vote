import React, { Component } from 'react';
import './SenateBillsCard.css';

export class SenateBillsCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { bills } = this.props       
        return(
            <div className='bills-container'>
                <h1 className='committee'>Committee: {bills.committee}</h1>
                <h2 className='bill-title'>Title: {bills.title}</h2>
                <h2 className='url'>Click here for more info: {bills.url}</h2>
            </div>
        )
    }
}

export default SenateBillsCard
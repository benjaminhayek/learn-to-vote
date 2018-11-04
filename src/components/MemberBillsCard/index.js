import React, { Component } from 'react';
import './MemberBillsCard.css';

export class MemberBillsCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { bills } = this.props       
        return(
            <div className='bills-container'>
                <h1 className='committee'>Committee: {bills.committee}</h1>
                <h2 className='bill-title'>Title: {bills.title}</h2>
                <a className='url' href={bills.url}>Click here for more info</a>
            </div>
        )
    }
}

export default MemberBillsCard
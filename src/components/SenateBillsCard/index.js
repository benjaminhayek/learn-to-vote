import React, { Component } from 'react';

export class SenateBillsCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { bills } = this.props       
        return(
            <div>
                <h1 className='title'>{bills.committees}</h1>
                <h2 className='title'>{bills.title}</h2>
                <h2 className='party'>{bills.api_uri}</h2>
            </div>
        )
    }
}

export default SenateBillsCard
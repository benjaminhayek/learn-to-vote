import React, { Component } from 'react';

export class SenateCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { senator } =this.props       
        return(
            <div className='senate-card'>
                <h1 className='name'>{senator.name}</h1>
                <h2 className='title'>{senator.title}</h2>
                <h2 className='party'>{senator.party}</h2>
            </div>
        )
    }
}

export default SenateCard
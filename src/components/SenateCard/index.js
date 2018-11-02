import React, { Component } from 'react';

export class SenateCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { senator } =this.props       
        return(
            <div>
                <h1>{senator.name}</h1>
            </div>
        )
    }
}

export default SenateCard
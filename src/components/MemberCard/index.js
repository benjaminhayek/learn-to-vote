import React, { Component } from 'react';

export class MemberCard extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default MemberCard
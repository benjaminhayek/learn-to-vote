import React, { Component } from 'react';

export class MemberCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { congressmen } = this.props
        return(
            <div>
                <h1>{congressmen.name}</h1>
            </div>
        )
    }
}

export default MemberCard
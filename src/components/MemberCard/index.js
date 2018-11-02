import React, { Component } from 'react';

export class MemberCard extends Component {
    constructor() {
        super()
    }

    render() {
        const { congressmen } = this.props
        return(
            <div classNamea='congress-card'>
                <h1 className='name'>{congressmen.name}</h1>
                <h2 className='title'>{congressmen.title}</h2>
                <h2 className='party'>{congressmen.party}</h2>
            </div>
        )
    }
}

export default MemberCard
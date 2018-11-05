import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelected } from '../../actions';
import PropTypes from 'prop-types';
import './MemberCard.css'

export class MemberCard extends Component {
    constructor() {
        super()
    }

    toggleSelect = () => {
        this.props.toggleSelected(this.props.congressmen.id)
    }

    render() {
        const { congressmen } = this.props
        return(
            <div onClick={this.toggleSelect} className={congressmen.party === 'D' ? 'dem' : 'rep'}>
                <h1 className='name'>{congressmen.name}</h1>
                <h2 className='title'>{congressmen.title}</h2>
                <h2 className='party'>{congressmen.party}</h2>
                <h2 className='election-date'>Next Election: {congressmen.nextElection}</h2>                
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    selected: state.selected,
  })

export const mapDispatchToProps = (dispatch) => ({
    toggleSelected: (id) => dispatch(toggleSelected(id))
})

MemberCard.propTypes = {
    congressmen: PropTypes.object
  }

export default connect(mapStateToProps, mapDispatchToProps)(MemberCard)
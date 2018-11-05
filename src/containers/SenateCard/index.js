import React, { Component } from 'react';
import { toggleSelected } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Apple from '../../utils/assets/apple.svg';
import Apple2 from '../../utils/assets/apple2.svg';
import './SenateCard.css'

export class SenateCard extends Component {
    constructor() {
        super()
    }

    toggleSelect = () => {
        this.props.toggleSelected(this.props.senator.id)
    }

    render() {
        const { senator } =this.props       
        return(
            <div onClick={this.toggleSelect} className={senator.party === 'D' ? 'dem' : 'rep'}>
                <img src={senator.selected ? Apple2 : Apple} className='apple' />
                <h1 className='name'>{senator.name}</h1>
                <h2 className='title'>{senator.title}</h2>
                <h2 className='party'>{senator.party}</h2>
                <h2 className='election-date'>Next Election: {senator.nextElection}</h2>
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

SenateCard.propTypes = {
    senator: PropTypes.object
  }

export default connect(mapStateToProps, mapDispatchToProps)(SenateCard)
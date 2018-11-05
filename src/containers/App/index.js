import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { contentStatus } from '../../actions'
import { fetchCongress, fetchSenators, getBills } from '../../actions/Thunks';
import MemberContainer from '../../components/MemberContainer';
import SenateContainer from '../../components/SenateContainer';
import './App.css';

export class App extends Component {

  async componentDidMount() {
    this.props.fetchCongress()
    this.props.fetchSenators()
    this.props.getBills()
  }

  render() {
    const { senators, congressmen, bills } = this.props;
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={() =>(
          <MemberContainer congressmen={congressmen} bills={bills}/>
        )} />
        <Route exact path='/senators' render={() => (
          <SenateContainer senators={senators} bills={bills}/>
        )} />
        <Route exact path='/compareCongress' render={() => (
          <MemberContainer congressmen={congressmen} bills={bills}/>
        )} />
        <Route exact path='/compareSenate' render={() => (
          <SenateContainer senators={senators} bills={bills}/>
        )} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  congressmen: state.congressmen,
  senators: state.senators,
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  getBills: () => dispatch(getBills()),
  fetchCongress: () => dispatch(fetchCongress()),
  fetchSenators: () => dispatch(fetchSenators()),
  contentStatus: (loading) => dispatch(contentStatus(loading))
});

App.propTypes = {
  senators: PropTypes.array,
  congressmen: PropTypes.array,
  bills: PropTypes.array
}

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(App));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { initialCongressFetch, initialSenateFetch } from '../../utils/ApiCals';
import { congressdata, senateData } from '../../utils/dataCleaners'
import { contentStatus } from '../../actions'
import { fetchCongress, fetchSenators } from '../../actions/Thunks';
import MemberContainer from '../../components/MemberContainer';
import SenateContainer from '../../components/SenateContainer';
import './App.css';

class App extends Component {

  async componentDidMount() {
    this.props.fetchCongress()
    this.props.fetchSenators()
  }

  render() {
    const { senators, congressmen } = this.props;
    return (
      <div className="App">
        <MemberContainer congressmen={congressmen} />
        <SenateContainer senators={senators} />
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
  fetchCongress: () => dispatch(fetchCongress()),
  fetchSenators: () => dispatch(fetchSenators()),
  contentStatus: (loading) => dispatch(contentStatus(loading))
});

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(App));

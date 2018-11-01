import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { initialCongressFetch, getState } from '../../utils/ApiCals';
import { contentStatus } from '../../actions'
import { fetchCongress, fetchSenators } from '../../actions/Thunks'
import './App.css';

class App extends Component {

  async componentDidMount() {
    this.props.fetchCongress()
    this.props.fetchSenators()
  }

  render() {
    return (
      <div className="App">
        
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

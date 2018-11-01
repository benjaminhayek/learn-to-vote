import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { initialFetch, getState } from '../../utils/ApiCals';
import { fetchCongress, contentStatus } from '../../actions'
import './App.css';

class App extends Component {

  async componentDidMount() {
    this.props.fetchCongress()
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
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  fetchCongress: () => dispatch(fetchCongress()),
  contentStatus: (loading) => dispatch(contentStatus(loading))
});

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(App));

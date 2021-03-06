import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import { contentStatus } from '../../actions';
import { fetchCongress, fetchSenators } from '../../actions/Thunks';
import ErrorPage from '../../components/ErrorPage';
import MemberContainer from '../../containers/MemberContainer';
import SenateContainer from '../../components/SenateContainer';
import './App.css';

export class App extends Component {

  async componentDidMount() {
    this.props.fetchCongress('house')
    this.props.fetchSenators('senate')
  }

  render() {
    const { senators, congressmen, bills } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
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
          <Route path='*' exact={true} component={ErrorPage} />
        </Switch>
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
  fetchCongress: (chamber) => dispatch(fetchCongress(chamber)),
  fetchSenators: (chamber) => dispatch(fetchSenators(chamber)),
  contentStatus: (loading) => dispatch(contentStatus(loading))
});

App.propTypes = {
  senators: PropTypes.array,
  congressmen: PropTypes.array,
}

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(App));

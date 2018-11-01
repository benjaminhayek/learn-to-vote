import React, { Component } from 'react';
import { initialFetch, getState } from '../../utils/ApiCals';
import { congressData } from '../../utils/dataCleaners'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const shit = await initialFetch()
    const poop = await getState()
    const schmoop = await congressData()
    console.log(schmoop)
    this.setState({data: shit})
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

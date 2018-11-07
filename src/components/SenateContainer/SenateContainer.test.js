import React from 'react';
import { SenateContainer } from './index';
import { shallow } from 'enzyme';

describe('SenateContainer', () => {
  let wrapper;
  let senator;
  
  beforeEach(() => {
    senator = [{name: 'Bob', id: 2, party: 'R', title: 'Senator', nextElection: '2020', selected: false}, {name: 'Jan', id: 2, party: 'R', title: 'Senator', nextElection: '2018', selected: false}];    
    wrapper = shallow(<SenateContainer senators={senator}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have an initial state of bills set to an empty array', () => {
    expect(wrapper.state().bills).toEqual([]);
  });

  it('should set the state of bills when handleSubmit is envoked', () => {
    const expected = []
    wrapper.instance().handleSubmit();
    expect(wrapper.state().bills).toEqual(expected);
  });
})
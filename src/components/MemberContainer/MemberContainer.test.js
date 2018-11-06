import React from 'react';
import { MemberContainer } from './index';
import { shallow } from 'enzyme';

describe('MemberContainer', () => {
  let wrapper;
  let congressmen;
  
  beforeEach(() => {
    congressmen = [{name: 'Ted', id: 1, party: 'D', title: 'Representative', nextElection: '2018', selected: false}, {name: 'Jan', id: 2, party: 'R', title: 'Representative', nextElection: '2018', selected: false}];    
    wrapper = shallow(<MemberContainer congressmen={congressmen} />);
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

  it('should reset the state on click', () => {
    const expected = []
    wrapper.instance().resetState()
    expect(wrapper.state().bills).toEqual(expected)
  })

  it.skip('should call educationBills on click', async () => {
    let handleSubmit = jest.fn();
    wrapper.find('compare-btn').simulate('click');
    expect(handleSubmit).toHaveBeenCalled()
  })
})
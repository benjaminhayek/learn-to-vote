import React from 'react';
import { MemberContainer } from './index';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow, mount } from 'enzyme';

describe('MemberContainer', () => {
  let wrapper;
  let congressmen;
  let clearSelected;
  
  beforeEach(() => {
    clearSelected = jest.fn();
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
})

describe('mapStateToProps', () => {
  it('should have access to senators, congressmen and loading', () => {
    const mockStore = {
      selected: 'undefined',
    }
    const expected = {...mockStore};
    const result = mapStateToProps(mockStore);
    expect(result).toEqual(expected);
  });
})

describe('mapDispatchToProps', () => {
  it('should call dispatch when clearSelected is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.clearSelected();
    expect(mockDispatch).toHaveBeenCalled();
  });
})
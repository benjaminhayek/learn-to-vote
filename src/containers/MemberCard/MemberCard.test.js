import React from 'react';
import { MemberCard } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;
  let mockFetch;
  let mockParty;
  let congressmen;

  beforeEach(() => {
    mockFetch = jest.fn();
    mockParty = 'D';
    congressmen = {name: 'name', party: 'D', title: 'title'}
    wrapper = shallow(
      <MemberCard congressmen={congressmen}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
  it('should call dispatch when fetchCongress is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleSelected({name: 'Political Guy'});
    expect(mockDispatch).toHaveBeenCalled();
  });
})
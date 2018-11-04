import React from 'react';
import { SenateCard } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow, mount } from 'enzyme';

describe('SenateCard', () => {
  let wrapper;
  let mockFetch;
  let mockParty;
  let senator;
  let toggleSelected;

  beforeEach(() => {
    mockFetch = jest.fn();
    mockParty = 'D';
    toggleSelected = jest.fn()
    senator = {name: 'name', party: 'D', title: 'title'}
    wrapper = shallow(
      <SenateCard senator={senator}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleSelect on click', () => {
    wrapper = mount(<SenateCard senator={senator} toggleSelected={toggleSelected}/>)
    const spy = jest.spyOn(wrapper.instance(), 'toggleSelect');
    wrapper.instance().forceUpdate();
    wrapper.find('.dem').simulate('click')
    expect(spy).toHaveBeenCalled()
  })
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
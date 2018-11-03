import React from 'react';
import { App } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;
  let mockFetch;

  beforeEach(() => {
    mockFetch = jest.fn();
    wrapper = shallow(
      <App />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})

import React from 'react';
import { Header } from './index';
import { shallow } from 'enzyme';

describe('HEADER', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
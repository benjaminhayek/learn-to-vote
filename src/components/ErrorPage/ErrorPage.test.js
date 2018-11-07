import React from 'react';
import ErrorPage from './index';
import { shallow } from 'enzyme';

describe('ERROR PAGE', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ErrorPage />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
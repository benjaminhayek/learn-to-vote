import React from 'react';
import { SenateBillsCard } from './index';
import { shallow } from 'enzyme';

describe('MemberBillsCard', () => {
  let wrapper;
  let bills;
  
  beforeEach(() => {
    bills = {comittee: 'Education', title: 'Bill title', url: 'www.gov.com'}
    wrapper = shallow(<SenateBillsCard bills={bills}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
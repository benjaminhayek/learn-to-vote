import React from 'react';
import { MemberBillsCard } from './index';
import { shallow } from 'enzyme';

describe('MemberBillsCard', () => {
  let wrapper;
  let bills;
  
  beforeEach(() => {
    bills = {comittee: 'Education', title: 'Bill title', url: 'www.gov.com'}
    wrapper = shallow(<MemberBillsCard bills={bills}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
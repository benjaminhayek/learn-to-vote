import React from 'react';
import { App } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;
  let mockFetch;
  let mockCongress;

  beforeEach(() => {
    mockFetch = jest.fn();
    mockCongress = [];
    wrapper = shallow(
      <App />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchCongress on componentDidMount', async () =>{
    let mockCongress= {congress:[]};
    let mockFn = jest.fn().mockImplementation(() => (mockCongress));
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockFn)
      });
    });
    wrapper = shallow(
      <App
        fetchCongress={mockFn}
        fetchSenators={mockFn}
        getBills={mockFn}
      />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call fetchSenators on componentDidMount', async () =>{
    let mockSenators= {senators:[]};
    let mockFn = jest.fn().mockImplementation(() => (mockSenators));
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockFn)
      });
    });
    wrapper = shallow(
      <App
        fetchCongress={mockFn}
        fetchSenators={mockFn}
        getBills={mockFn}
      />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call getBills on componentDidMount', async () =>{
    let mockBills= {bills:[]};
    let mockFn = jest.fn().mockImplementation(() => (mockBills));
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockFn)
      });
    });
    wrapper = shallow(
      <App
        fetchCongress={mockFn}
        fetchSenators={mockFn}
        getBills={mockFn}
      />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });
})

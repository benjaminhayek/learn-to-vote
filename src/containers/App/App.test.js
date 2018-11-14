import React from 'react';
import { App } from './index.js';
import { mapStateToProps, mapDispatchToProps } from './index.js';
import { shallow } from 'enzyme';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
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

  it.only('should call getBills on componentDidMount', async () =>{
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
    // await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });
})

describe('mapStateToProps', () => {
  it('should have access to senators, congressmen and loading', () => {
    const mockStore = {
      congressmen: [],
      senators: [],
      loading: 'undefined',
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
    mappedProps.fetchCongress({name: 'Political Guy'});
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when fetchSenators is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchSenators({name: 'Political Guy'});
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call dispatch when contentStatus is invoked', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.contentStatus('loading');
    expect(mockDispatch).toHaveBeenCalled();
  });
})

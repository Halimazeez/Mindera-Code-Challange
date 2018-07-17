import React from 'react';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import fetchMock from 'fetch-mock';

import App from './App';
import Card from './Card';
import Scroll from './Scroll';

Enzyme.configure({ adapter: new Adapter() });
fetchMock.get(`*`, JSON.stringify({ Developer: `Haim Azeez` }));

describe('App', () => {
  it('Renders loading component by default', () => {
    const wrapper = shallow(<App />);
    const mainView = wrapper.find('Loading');
    expect(mainView.length).toEqual(1);
  });

  it('Render main section containing after loading', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: false });
    const mainView = wrapper.find('main');
    expect(mainView.length).toEqual(1);
  });

  it('Calls componentDidMount() lifecycle method with a fetch mock api', () => {
    spy(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('Renders default card without api server running', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: false });
    const mainView = wrapper.find('Card');
    expect(mainView.length).toEqual(1);
  });

  it('JsonData empty state call', async () => {
    const wrapper = await shallow(<App />);
    await wrapper.update();
    expect(wrapper.state('jsonData').length).toEqual(1);
  });
});

describe('Card', () => {
  it('Default props are defined, header as example', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.instance().props.header).toBeDefined();
  });

  it('Allows for a custom prop', () => {
    const wrapper = shallow(<Card title="sample" />);
    expect(wrapper.instance().props.title).toEqual('sample');
  });

  it('Allows a prop to be set dynamically', () => {
    const wrapper = shallow(<Card title="sample" />);
    expect(wrapper.instance().props.title).toEqual('sample');
    wrapper.setProps({ title: 'new' });
    expect(wrapper.instance().props.title).toEqual('new');
  });
});

describe('Slider', () => {
  it('left and right arrow render always', () => {
    const wrapper = shallow(<Scroll />);
    const mainView = wrapper.find('i');
    expect(mainView.length).toEqual(2);
  });
});

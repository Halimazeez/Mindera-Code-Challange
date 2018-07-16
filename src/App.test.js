import React from 'react';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = new JSDOM(
  '<!doctype html><html><body></body></html>'
).window;
global.document = document;
global.window = document.defaultView;

import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';
import { spy } from 'sinon';
import fetchMock from 'fetch-mock';

import App from './App';
import Card from './Card';

Enzyme.configure({ adapter: new Adapter() });

//const wrapper = shallow(<App />);
fetchMock.get(
  `*`,
  JSON.stringify({
    id: 1,
    title: 'Header example',
    subtitle: 'Subtitle example',
    text: 'Component text sample',
    image_url: 'https://picsum.photos/300/150/?random',
    href: 'https://linkedin.com/in/halim-azeez-01134a14a/',
    is_liked: true
  })
);

describe('App', () => {
  it('Renders loading component by default', () => {
    const wrapper = shallow(<App />);
    const mainView = wrapper.find('Loading');
    assert.equal(mainView.length, 1);
  });

  it('Render main section containing cards after loading', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loading: false });
    const mainView = wrapper.find('main');
    assert.equal(mainView.length, 1);
  });

  it('Calls componentDidMount() lifecycle method', () => {
    spy(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
    //componentDidMountSpy.restore();
  });

  it('Renders ammount of child props', () => {
    const wrapper = shallow(
      <App>
        <Card />
      </App>
    );
    wrapper.setState({ loading: false });
    console.log(wrapper.find(Card).props());
  });
});

describe('Card', () => {
  it('Default props are defined sample subheader', () => {
    const wrapper = mount(<Card />);
    console.log(wrapper.props());
    expect(wrapper.instance().props.subheader).toBeDefined();
    //expect(wrapper.props()).toBe(4);
  });

  it('Allows for a custom prop', () => {
    const wrapper = mount(<Card title="sample" />);
    expect(wrapper.props().title).toEqual('sample');
  });

  it('Allows a prop to be set dynamically', () => {
    const wrapper = mount(<Card title="sample" />);
    expect(wrapper.props().title).toEqual('sample');
    wrapper.setProps({ title: 'new' });
    expect(wrapper.props().title).toEqual('new');
  });

  /*
  it('allows for custom required props to render a card', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.instance().props.subheader).toBeDefined();
  });
  */
});

describe('Slider', () => {
  it('Default props are defined sample subheader', () => {
    const wrapper = shallow(<Card />);
    console.log(wrapper.props());
    expect(wrapper.instance().props.subheader).toBeDefined();
    //expect(wrapper.props()).toBe(4);
  });
});

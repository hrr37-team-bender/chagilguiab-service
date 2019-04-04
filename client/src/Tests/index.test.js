import React from 'react';
import { shallow } from 'enzyme';
import App from '../index.jsx';

describe ('App', () => {
  it('should render properly', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  })
});


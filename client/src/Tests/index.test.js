import React from 'react';
import { shallow } from 'enzyme';
import App from '../index.jsx';


test('App renders', () => {
  const component = shallow(<App />);

  expect(component.exists()).toBe(true);
});
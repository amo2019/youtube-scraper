import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
const test = {
  term: "",
};

it('renders without crashing', () => {
  expect(shallow(<Form />)).toMatchSnapshot();
});
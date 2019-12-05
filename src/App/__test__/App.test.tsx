import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('click create new button on welcome screen => renders create new project screen', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('div')).toHaveLength(1);
});

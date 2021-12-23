import { render, screen } from '@testing-library/react';
import SocialJSApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

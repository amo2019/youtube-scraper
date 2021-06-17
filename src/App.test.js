import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
describe('Test suits for App', () => {
    it('should match with snapshot', () => {
    const tree = render(
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      );
     expect(tree).toMatchSnapshot();
     });

    
    });

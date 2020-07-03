import React from 'react';
import { theme } from 'theme';
import { shallowWithTheme } from 'enzyme.setup';
import App from 'components/App';

describe('App component', () => {
  it('should contain footer', () => {
    const app = shallowWithTheme(<App />, theme);
    expect(app).toMatchSnapshot();
  });
});

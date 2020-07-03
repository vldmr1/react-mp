import React from 'react';
import { theme } from 'theme';
import { shallowWithTheme } from 'enzyme.setup';
import Logo from '../Logo.component';

describe('Logo component', () => {
  it('should match snapshot', () => {
    const logo = shallowWithTheme(<Logo />, theme);
    expect(logo).toMatchSnapshot();
  });
});

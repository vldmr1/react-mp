import React from 'react';
import { theme } from 'theme';
import { mountWithTheme } from 'enzyme.setup';
import { Footer } from 'components/Footer';
import { Logo } from 'components/Common';

describe('Footer component', () => {
  it('should contain logo', () => {
    const footer = mountWithTheme(<Footer />, theme);
    const logo = footer.find(Logo);
    expect(logo.exists()).toBe(true);
  });
});

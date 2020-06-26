import React from 'react';
import { theme } from 'theme';
import { mountWithTheme } from 'enzyme.setup';
import { Logo } from 'components/Common';
import { ReactWrapper } from 'enzyme';
import { Header } from 'components/Header';
import { SearchIcon } from '../components';

describe('Header component', () => {
  let header: ReactWrapper;

  beforeAll(() => {
    header = mountWithTheme(<Header />, theme);
  });

  it('should contain logo', () => {
    const logo = header.find(Logo);
    expect(logo.exists()).toBe(true);
  });

  it('should contain search page icon link on movie details page', () => {
    const searchIcon = header.find(SearchIcon);
    expect(searchIcon.exists()).toBe(true);
  });
});

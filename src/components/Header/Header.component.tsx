import React from 'react';
import { Logo, ContentWrapper } from 'components/Common';
import icon from 'assets/img/search-icon.svg';
import { NavBar, SearchIcon } from './components';

const Header: React.FC = () => (
  <header>
    <ContentWrapper>
      <NavBar>
        <Logo />
        {/* TODO: change the appearance of search icon according to current route */}
        <SearchIcon src={icon} style={{ display: 'none' }} />
      </NavBar>
    </ContentWrapper>
  </header>
);

export default Header;

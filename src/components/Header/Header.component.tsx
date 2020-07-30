import React from 'react';
import { Logo, ContentWrapper } from 'components/Common';
import icon from 'assets/img/search-icon.svg';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { NavBar, SearchIcon, PageHeader } from './components';

const Header: React.FC = () => {
  const location = useLocation();
  const isMoviePage = location.pathname.includes('/movie/');
  return (
    <PageHeader isMoviePage={isMoviePage}>
      <ContentWrapper>
        <NavBar>
          <Logo />
          <Link to="/search">
            <SearchIcon src={icon} style={{ display: isMoviePage ? 'block' : 'none' }} />
          </Link>
        </NavBar>
      </ContentWrapper>
    </PageHeader>
  );
};

export default Header;

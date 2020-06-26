import React, { ReactElement } from 'react';
import { Logo } from 'components/Common';
import { FooterWrapper } from './components';

const Footer = (): ReactElement => (
  <FooterWrapper className="app-footer">
    <Logo />
  </FooterWrapper>
);

export default Footer;

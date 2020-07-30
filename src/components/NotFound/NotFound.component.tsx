import React, { ReactElement } from 'react';
import notFoundImg from 'assets/img/404.jpg';
import { NotFoundWrapper, NotFoundImage, NotFoundHeading } from './components';

const NotFound = (): ReactElement => (
  <NotFoundWrapper>
    <NotFoundImage src={notFoundImg} />
    <NotFoundHeading>Page not found</NotFoundHeading>
  </NotFoundWrapper>
);

export default NotFound;

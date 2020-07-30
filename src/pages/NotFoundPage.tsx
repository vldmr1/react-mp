import React, { ReactElement } from 'react';
import { Header } from 'components/Header';
import { NotFound } from 'components/NotFound';

const NotFoundPage = (): ReactElement => (
  <>
    <Header />
    <NotFound />
  </>
);

export default NotFoundPage;

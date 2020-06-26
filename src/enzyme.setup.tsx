import React, { ReactElement } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import {
  configure, mount, ReactWrapper, shallow, ShallowWrapper,
} from 'enzyme';

configure({ adapter: new Adapter() });

export const mountWithTheme = (element: ReactElement, theme: DefaultTheme): ReactWrapper => mount(
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>,
);

export const shallowWithTheme = (element: ReactElement, theme: DefaultTheme): ShallowWrapper => (
  shallow(
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>,
  )
);

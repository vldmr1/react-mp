import React from 'react';
import { theme } from 'theme';
import { mountWithTheme } from 'enzyme.setup';
import { Toggle } from 'components/Common';
import { ControlBar } from 'components/ControlBar';
import { ReactWrapper } from 'enzyme';
import { ControlBarMessage } from '../components';

describe('ControlBar component', () => {
  let controlBar: ReactWrapper;
  const handleSortChange = jest.fn();

  beforeAll(() => {
    controlBar = mountWithTheme(<ControlBar sortChangeHandler={handleSortChange} sortBy="release date" />, theme);
  });

  it('should contain toggle component on Search page', () => {
    const toggle = controlBar.find(Toggle);
    expect(toggle.exists()).toBe(true);
  });

  it('should contain text about genres on movie details page', () => {
    const controlBarMessage = controlBar.find(ControlBarMessage);
    expect(controlBarMessage.exists()).toBe(true);
  });
});

import React from 'react';
import { Toggle, ContentWrapper, FlexContainer } from 'components/Common';
import { ToggleLabel, ToggleTitle } from 'enums';

import { ControlBarWrapper, ControlBarMessage } from './components';

const ControlBar: React.FC = () => (
  <ControlBarWrapper>
    <ContentWrapper>
      {/* TODO: change justification dynamically depending on the page */}
      <FlexContainer justifyContent="flex-end">
        {/* TODO: display ControlBarMessage depending on the route */}
        <ControlBarMessage style={{ display: 'none' }}>Films by Drama genre</ControlBarMessage>
        <Toggle
          leftLabel={ToggleLabel.ReleaseDate}
          rightLabel={ToggleLabel.Rating}
          title={ToggleTitle.SortBy}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          toggleHandler={():void => {}}
          selected="release date"
        />
      </FlexContainer>
    </ContentWrapper>
  </ControlBarWrapper>
);

export default ControlBar;

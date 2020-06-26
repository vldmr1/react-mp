import React, { ReactElement } from 'react';
import { Toggle, ContentWrapper, FlexContainer } from 'components/Common';
import { ToggleLabel, ToggleTitle, ToggleName } from 'enums';
import { ControlBarWrapper, ControlBarMessage } from './components';

interface ControlBarProps {
  sortBy?: string;
  sortChangeHandler?: (sortBy: string) => void;
}

const ControlBar = ({ sortBy, sortChangeHandler }: ControlBarProps): ReactElement => (
  <ControlBarWrapper>
    <ContentWrapper>
      {/* TODO: change justification dynamically depending on the page */}
      <FlexContainer justifyContent="flex-end">
        {/* TODO: display ControlBarMessage depending on the route */}
        <ControlBarMessage style={{ display: 'none' }}>Films by Drama genre</ControlBarMessage>
        {sortBy && sortChangeHandler && (
          <Toggle
            inputName={ToggleName.SortBy}
            leftLabel={ToggleLabel.ReleaseDate}
            rightLabel={ToggleLabel.Rating}
            title={ToggleTitle.SortBy}
            toggleHandler={sortChangeHandler}
            selected={sortBy}
          />
        )}
      </FlexContainer>
    </ContentWrapper>
  </ControlBarWrapper>
);

export default ControlBar;

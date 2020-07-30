import React, { ReactElement } from 'react';
import { Toggle, ContentWrapper, FlexContainer } from 'components/Common';
import { ToggleLabel, ToggleTitle, ToggleName } from 'enums';
import { ControlBarWrapper, ControlBarMessage } from './components';

interface ControlBarProps {
  sortBy?: string;
  sortChangeHandler?: (sortBy: string) => void;
  currentMovieGenre?: string;
}

const ControlBar = ({
  sortBy, sortChangeHandler, currentMovieGenre,
}: ControlBarProps): ReactElement => (
  <ControlBarWrapper>
    <ContentWrapper>
      <FlexContainer justifyContent={currentMovieGenre ? 'flex-start' : 'flex-end'}>
        {currentMovieGenre && (
          <ControlBarMessage>
            {`Films by ${currentMovieGenre} genre`}
          </ControlBarMessage>
        )}
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

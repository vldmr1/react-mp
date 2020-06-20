import React from 'react';
import {
  ToggleContainer, ToggleTitle, ToggleInput, ToggleLabel,
} from './components';

interface ToggleProps {
  toggleHandler: () => void;
  title: string;
  leftLabel: string;
  rightLabel: string;
  selected: string;
}

const Toggle = ({
  toggleHandler,
  title,
  leftLabel,
  rightLabel,
  selected,
}: ToggleProps): React.ReactElement => (
  <ToggleContainer>
    <ToggleTitle>{title}</ToggleTitle>
    <ToggleInput
      type="radio"
      id="left"
      name="switchToggle"
      value={leftLabel}
      onChange={toggleHandler}
      checked={selected === leftLabel.toLowerCase()}
    />
    {/* TODO: add  htmlFor={leftId} */}
    <ToggleLabel>{leftLabel}</ToggleLabel>

    <ToggleInput
      type="radio"
      id="right"
      name="switchToggle"
      value={rightLabel}
      onChange={toggleHandler}
      checked={selected === rightLabel.toLowerCase()}
    />
    {/* TODO: add  htmlFor={rightId} */}
    <ToggleLabel>{rightLabel}</ToggleLabel>
  </ToggleContainer>
);

export default Toggle;

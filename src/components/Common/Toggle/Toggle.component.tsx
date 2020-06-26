import React, { Dispatch } from 'react';
import {
  ToggleContainer, ToggleTitle, ToggleInput, ToggleLabel,
} from './components';

interface ToggleProps {
  toggleHandler: Dispatch<string> | ((value: string) => void);
  title: string;
  leftLabel: string;
  rightLabel: string;
  selected: string;
  inputName: string;
}

const Toggle = ({
  toggleHandler,
  title,
  leftLabel,
  rightLabel,
  selected,
  inputName,
}: ToggleProps): React.ReactElement => {
  const leftId = `${inputName}-${leftLabel}`.replace(/\s/g, '');
  const rightId = `${inputName}-${rightLabel}`.replace(/\s/g, '');

  return (
    <ToggleContainer>
      <ToggleTitle>{title}</ToggleTitle>
      <ToggleInput
        type="radio"
        id={leftId}
        name={inputName}
        value={leftLabel}
        onChange={() => toggleHandler(leftLabel)}
        checked={selected === leftLabel}
      />
      <ToggleLabel htmlFor={leftId}>{leftLabel}</ToggleLabel>

      <ToggleInput
        type="radio"
        id={rightId}
        name={inputName}
        value={rightLabel}
        onChange={() => toggleHandler(rightLabel)}
        checked={selected === rightLabel}
      />
      <ToggleLabel htmlFor={rightId}>{rightLabel}</ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;

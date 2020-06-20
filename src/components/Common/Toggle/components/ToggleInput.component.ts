import styled from 'styled-components';

const SwitchInput = styled.input`
    position: absolute;
    clip: rect(0, 0, 0, 0);
    height: 0.1rem;
    width: 0.1rem;
    border: 0;
    overflow: hidden;

    &:checked + label {
      background-color: ${({ theme }):string => theme.colors.red};
      color: ${({ theme }):string => theme.colors.white};
      box-shadow: none;
    }
`;

export default SwitchInput;

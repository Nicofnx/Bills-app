import styled from 'styled-components';

export const SelectContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 14px;

    & .MuiAutocomplete-root {
        width: 100%;
    }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 14px;
  &:focus {
    outline: none;
  }
`;
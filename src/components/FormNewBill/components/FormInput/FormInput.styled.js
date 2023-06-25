import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 15px;
  line-height: 28px;
  height: 40px;
  margin: 6px 0;
  outline: none;
  transition: border 0.3s;
  box-sizing: border-box;
  
  &:focus {
    border: 1px solid #3f51b5;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  text-align: left;
  width: 100%;
  gap: 24px;

  ${({width}) => width && `
    width: ${width};
`}
`;

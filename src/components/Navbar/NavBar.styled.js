import styled from "styled-components"

export const Container = styled.nav`
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0px 20px;
`

export const BillButton = styled.button`
  background-color: #b3d9ff;
  border: 1px solid #f2f2f2;
  color: black;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;

  & svg {
    font-size: 10px;
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }
`
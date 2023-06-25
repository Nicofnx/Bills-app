import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  text-align: left;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 56px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ProductLabel = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
`;

export const ProdutButtonDelete = styled.button`
  background-color: ${props => (props.isButtonDelete ? '#f05550' : '#b3d9ff')};
  border: 1px solid #f2f2f2;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  & svg {
    font-size: 10px;
    width: 18px;
    height: 18px;
  }
`
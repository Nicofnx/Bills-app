import styled from 'styled-components';

export const BillTable = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    
  }

 
  
  th, td {
    padding: 10px;
    text-align: left;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    
  }
  
  @media (max-width: 640px) {
    td:nth-child(1) {
      background-color: #b3d9ff;
      border-radius: 5px;
    }
  }

  th {
    background-color: #b3d9ff; // un color celeste
    color: #000;    
  }
  
  tr {
    border: 1px solid #1686FF;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
    
  }

  
  td {
    
    border-top: 1px solid #ddd; // un color clarito
  }

  .table-actions{
    width: 80px;
    
  }

  .table-date{
    min-width: 60px;
    
  }

`;


export const CardAction = styled.button`
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
`;

export const CardActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 80px;
`;
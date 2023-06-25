import { useContext } from 'react';
import { BillTable, CardActionContainer, CardAction } from './BillList.styled';
import appContext from '../../context/DataProvider';
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FormNewBill from '../FormNewBill/FormNewBill';
import useModal from '../Modal/hook/useModal';

const BillList = () => {
  const { listBills, removeBillToList } = useContext(appContext);
  const { openModal, RenderModal, closeModal } = useModal();


  const handleDeleteBill = (billId) => {
    const updatedBills = listBills.filter((bill) => bill.id !== billId);
    removeBillToList(updatedBills);
    
  };

  const handleEditBill = (selectedBill) => {
    openModal(<FormNewBill billData={selectedBill} closeModal={closeModal}/>)
  };

  const calculateTotalPrice = (productos = []) => {
    let totalPrice = 0;
    productos.forEach((producto) => {
      totalPrice += producto.price;
    });
    return totalPrice;
  };

  return (
    <BillTable>
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th className='table-date'>Fecha</Th>
              <Th>Cliente</Th>
              <Th>Direccion</Th>
              <Th>Total</Th>
              <Th>Estado</Th>
              <Th className='table-actions'>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listBills.length > 0 
            ? 
              listBills.map((bill) => (
                <Tr key={bill.id}>
                  <Td>{bill.id}</Td>
                  <Td>{bill.fecha}</Td>
                  <Td>{bill.cliente}</Td>
                  <Td>{bill.direccion}</Td>
                  <Td>${calculateTotalPrice(bill.productos)}</Td>
                  <Td>{bill.estado}</Td>
                  <Td>
                    <CardActionContainer>
                      <CardAction onClick={()=>handleEditBill(bill)}><ModeEditOutlineOutlinedIcon /></CardAction>
                      <CardAction isButtonDelete={'isButtonDelete'} onClick={()=>handleDeleteBill(bill.id)}><DeleteForeverOutlinedIcon/></CardAction>
                    </CardActionContainer>
                  </Td>
                </Tr>
              ))
            :
            <Tr>
              <Td>No hay facturas cargadas en sistema</Td>
            </Tr>
            }
          </Tbody>
          <RenderModal />
        </Table>
    </BillTable>
  );
};
export default BillList;
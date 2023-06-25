import { useContext, useState, useEffect } from "react";
import appContext from '../../../context/DataProvider';

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  return `${year}-${month}-${day}`;
};

export const useBills = () => {
  const [productOption, setProductOption] = useState([]);
  const { addBillToList, lastId, editBillToList } = useContext(appContext);

  const resetBill = {
    id: lastId,
    cliente: '',
    direccion: '',
    productos: [],
    fecha: getCurrentDate(),
    cantidad: 0,
    estado: 'Pendiente de pago'
}

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error HTTP: ' + resp.status);
        }
        return resp.json();
      })
      .then((data) => setProductOption(data.products))
      .catch((error) => alert(error));
  }, []);


  const handleForm = ({factura, isEdit}) => {
    if(isEdit) {
        editBillToList(factura);
    } else {
        addBillToList({
            id: factura.id,
            cliente: factura.cliente,
            direccion: factura.direccion,
            productos: factura.productos,
            fecha: factura.fecha,
            cantidad: factura.cantidad,
            estado: 'Pendiente de pago'
        });
    }
  };

  return {
    productOption,
    handleForm,
    resetBill
  };
};
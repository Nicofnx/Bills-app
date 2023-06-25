import React, { useContext, useEffect, useState } from 'react';
import FormInput from './components/FormInput/FormInput';
import FormSelect from './components/FormSelect/FormSelect';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { Form, FormColumn, SaveButton } from './FormNewBill.styled';
import { useBills } from './hook/useBill';
import appContext from '../../context/DataProvider';

const FormNewBill = ({billData, closeModal}) => {
  const { handleForm, productOption, resetBill } = useBills();
  const [factura, setFactura] = useState(billData || resetBill);
  const { lastId } = useContext(appContext);

  useEffect(() => {
    if (billData) return;
    setFactura(prevFactura => ({...prevFactura, id: lastId}));
  }, [lastId, billData]);

  const addProduct = (selected) => {
    const productoSeleccionado = productOption.find((producto) => producto.title === selected.title);

    if (productoSeleccionado) {
      setFactura(prevFactura => ({
        ...prevFactura,
        productos: [...prevFactura.productos, productoSeleccionado]
      }));
    }
  };

  const removeProduct = (index) => {
    if (index >= 0 && index < factura.productos.length) {
      setFactura(prevFactura => ({
        ...prevFactura,
        productos: prevFactura.productos.filter((_, i) => i !== index)
      }));
    }
  };


  const clearForm = () => {
    setFactura(resetBill);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFactura(prevFactura => ({...prevFactura, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (factura.productos.length === 0) {
      alert('Falto cargar producto');
        return;
    }

    if(billData) {
      handleForm({factura, isEdit: billData});
      closeModal();
    } else {
      handleForm({factura});
    }
    clearForm();
  };

  return (
    <div>
      <h3>Nueva Factura</h3>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Cliente:"
          type="text"
          name="cliente"
          value={factura.cliente}
          onChange={handleChangeInput}
          required
        />
        <FormColumn>
          <>
            <FormInput
              label="Dirección:"
              type="text"
              name="direccion"
              value={factura.direccion}
              onChange={handleChangeInput}
              required
            />
            <FormInput
              label="fecha:"
              type="date"
              name="fecha"
              value={factura.fecha}
              onChange={handleChangeInput}
              width="180px"
              required
            />
          </>
        </FormColumn>

        <br />

        <FormSelect
          label="Producto:"
          onChange={addProduct}
          productOption={productOption}
        />

        <br />

        <div>
          {factura.productos.map((producto, index) => (
            <ProductDetail key={index} producto={producto} onRemove={()=>removeProduct(index)}/>
          ))}
        </div>

        <SaveButton type="submit">Guardar Factura</SaveButton>
    
      </Form>

    </div>
  );
};
export default FormNewBill;
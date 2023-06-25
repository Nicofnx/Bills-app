import React from 'react';
import { ProductImage, ProductInfo, ProductLabel, ProductWrapper, ProdutButtonDelete} from './ProductDetal.styled'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const ProductDetail = ({ producto, onRemove }) => {
  return (
    <ProductWrapper>
      <ProductImage src={producto.thumbnail} alt={producto.title} />
      <ProductInfo>
        <div><ProductLabel>Categoría:</ProductLabel> {producto.category}</div>
        <div><ProductLabel>Nombre:</ProductLabel> {producto.title}</div>
        <div><ProductLabel>Precio:</ProductLabel> ${producto.price}</div>
      </ProductInfo>
      <ProdutButtonDelete type="button" isButtonDelete='isButtonDelete' onClick={()=>onRemove(producto)}><DeleteForeverOutlinedIcon/></ProdutButtonDelete>
    </ProductWrapper>
  );
};

export default ProductDetail;
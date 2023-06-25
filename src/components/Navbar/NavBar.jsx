import FormNewBill from '../FormNewBill/FormNewBill';
import useModal from '../Modal/hook/useModal';
import { BillButton, Container } from './NavBar.styled'
import ReceiptIcon from '@mui/icons-material/Receipt';

export const NavBar = () => {
  const { openModal, RenderModal } = useModal();

  return (
    <Container>
      <BillButton onClick={()=> openModal(<FormNewBill/>)}>Generar Factura <ReceiptIcon/></BillButton>
      <RenderModal /> 
    </Container>
  )
}
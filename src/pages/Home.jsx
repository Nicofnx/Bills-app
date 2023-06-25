import { Container, Header } from './Home.styled'
import BillList from "../components/BillList/BillList";
import { NavBar } from "../components/Navbar/NavBar";
import styled from "styled-components";


const HomePage = () => {

  return (
    <Container>
      <Header>
        <h2>Lista de Facturas</h2>
      </Header>    

      <NavBar/>

      <BillList />
      
    </Container>
  );
}

export default HomePage;
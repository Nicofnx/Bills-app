import styled from 'styled-components';
import './App.css';
import HomePage from './pages/Home';
import { DataProvider } from './context/DataProvider';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <div className="App">
        <HomePage />
      </div>
    </DataProvider>
  );
}

export default App;

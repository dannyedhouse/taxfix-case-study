import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

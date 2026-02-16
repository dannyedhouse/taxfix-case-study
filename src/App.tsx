import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./components/Navbar/Navbar";
import { BookDetailPage } from "./pages/BookDetailPage";
import { HomePage } from "./pages/HomePage";

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
        <Route path="/book/:workId" element={<BookDetailPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

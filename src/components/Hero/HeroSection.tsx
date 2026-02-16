import styled from "styled-components";
import { BookOpen } from "lucide-react";
import { Button } from "../ui/Button/Button";

const AnnouncementBanner = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #d4ff9a;
  padding: 0.75rem 2rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #1a1a1a;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.625rem 1rem;
  }
`;

const StyledSection = styled.main`
  background-color: #adee68;
  min-height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 48px;

  @media (max-width: 768px) {
    min-height: calc(100vh - 42px);
    padding-top: 42px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  gap: 4rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 2rem 2rem;
    gap: 2rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;

  @media (max-width: 1024px) {
    align-items: center;
    max-width: 100%;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    max-width: 300px;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 350px;
    max-height: 350px;
    object-fit: contain;

    @media (max-width: 1024px) {
      max-width: 250px;
      max-height: 250px;
    }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #154618;
  margin-bottom: 1.5rem;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #154618;
  text-align: left;
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const HeroSection = () => {
  return (
    <>
      <AnnouncementBanner>
        <BookOpen size={16} />
        <span>New release! Book here...</span>
      </AnnouncementBanner>
      <StyledSection>
        <Container>
          <ContentSection>
            <Title>Welcome to the Taxfix Book Library</Title>
            <Subtitle>
              Discover new books and authors. Powered by OpenLibrary.
            </Subtitle>
            <Button>Get started</Button>
          </ContentSection>
          <ImageSection>
            <img src="./heroImage.png" alt="TaxFix reading illustration" />
          </ImageSection>
        </Container>
      </StyledSection>
    </>
  );
};

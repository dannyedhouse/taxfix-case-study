import styled from "styled-components";
import { InfoIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button/Button";

const AnnouncementBanner = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--color-banner-green);
  padding: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledSection = styled.main`
  background-color: var(--color-light-green);
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
  padding: 20px;
  gap: 2px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 20px;
    gap: 32px;
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
  font-size: 64px;
  font-weight: 800;
  color: var(--color-dark-green);
  margin-bottom: var(--spacing-xl);
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: var(--color-dark-green);
  text-align: left;
  margin-bottom: var(--spacing-3xl);

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/search");
  };

  return (
    <>
      <AnnouncementBanner>
        <InfoIcon size={16} />
        <span>Click the search bar in the top right to begin searching.</span>
      </AnnouncementBanner>
      <StyledSection>
        <Container>
          <ContentSection>
            <Title>Welcome to the Taxfix Book Library</Title>
            <Subtitle>
              Discover new books and authors. Powered by OpenLibrary.
            </Subtitle>
            <a
              href="https://taxfix.com/en-uk/"
              no-referraltarget="_blank"
              rel="noopener noreferrer"
            >
              <Button onClick={() => navigate("taxfix.com")}>
                Find out more
              </Button>
            </a>
          </ContentSection>
          <ImageSection>
            <img src="./heroImage.png" alt="TaxFix reading illustration" />
          </ImageSection>
        </Container>
      </StyledSection>
    </>
  );
};

import styled from "styled-components";

const HeaderContainer = styled.div``;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: var(--color-dark-green);
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Authors = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const AuthorText = styled.p`
  font-size: 20px;
  color: var(--color-text-secondary);
  margin: 0;
`;

const ContributorText = styled(AuthorText)`
  font-size: 16px;
  font-style: italic;
`;

interface BookHeaderProps {
  title: string;
  authors?: string[];
  contributions?: string[];
}

export const BookHeader = ({ title, authors, contributions }: BookHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {authors && authors.length > 0 && (
        <Authors>
          <AuthorText>by {authors.join(", ")}</AuthorText>
        </Authors>
      )}
      {contributions && contributions.length > 0 && (
        <Authors>
          <ContributorText>{contributions.join(", ")}</ContributorText>
        </Authors>
      )}
    </HeaderContainer>
  );
};

import styled from "styled-components";
import { Skeleton } from "../ui/Skeleton/Skeleton";

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-4xl);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

const CoverSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const CoverSkeleton = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  background-color: var(--color-bg-skeleton);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const ButtonsSection = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

export const BookDetailSkeleton = () => {
  return (
    <SkeletonContainer>
      <CoverSection>
        <CoverSkeleton />
      </CoverSection>

      <DetailsSection>
        <TitleSection>
          <Skeleton width="80%" height="48px" />
          <Skeleton width="40%" height="20px" />
        </TitleSection>

        <div>
          <Skeleton width="200px" height="24px" borderRadius="var(--radius-md)" />
          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <Skeleton width="100%" height="80px" borderRadius="var(--radius-md)" />
          </div>
        </div>

        <div>
          <Skeleton width="150px" height="24px" borderRadius="var(--radius-md)" />
          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <Skeleton width="100%" height="120px" borderRadius="var(--radius-md)" />
          </div>
        </div>

        <ButtonsSection>
          <Skeleton width="180px" height="44px" borderRadius="var(--radius-md)" />
          <Skeleton width="200px" height="44px" borderRadius="var(--radius-md)" />
        </ButtonsSection>
      </DetailsSection>
    </SkeletonContainer>
  );
};

import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "lucide-react";
import {
  useGetBookDetailsQuery,
  useGetAuthorDetailsQuery,
} from "../services/Books";
import { BookCover } from "../components/BookCover/BookCover";
import { BookHeader } from "../components/BookDetail/BookHeader";
import { BookDescription } from "../components/BookDetail/BookDescription";
import { BookSubjects } from "../components/BookDetail/BookSubjects";
import { BookDetailSkeleton } from "../components/BookDetail/BookDetailSkeleton";
import { AmazonButton } from "../components/ui/AmazonButton/AmazonButton";
import { ExternalLinkButton } from "../components/ui/Button/ExternalLinkButton";
import { processBookData } from "../utils/processBookData";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: var(--color-bg-white);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-2xl);

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: transparent;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: var(--spacing-xl);

  &:hover {
    background-color: var(--color-bg-gray-light);
    border-color: var(--color-text-tertiary);
  }
`;

const BookContent = styled.div`
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

  > * {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const ErrorState = styled.div`
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--color-error);
  font-size: 16px;
`;

export const BookDetailPage = () => {
  const { workId } = useParams<{ workId: string }>();
  const navigate = useNavigate();

  const {
    data: bookData,
    isLoading,
    isError,
  } = useGetBookDetailsQuery(`/works/${workId}`, { skip: !workId });

  const firstAuthorKey = bookData?.authors?.[0]?.author?.key;
  const { data: firstAuthorData } = useGetAuthorDetailsQuery(
    firstAuthorKey || "",
    {
      skip: !firstAuthorKey,
    },
  );

  if (isLoading) {
    return (
      <PageContainer>
        <ContentWrapper>
          <BackButton onClick={() => navigate("/")}>
            <ArrowLeft size={16} />
            Back to Search
          </BackButton>
          <BookDetailSkeleton />
        </ContentWrapper>
      </PageContainer>
    );
  }

  if (isError || !bookData) {
    return (
      <PageContainer>
        <ContentWrapper>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={16} />
            Back
          </BackButton>
          <ErrorState>
            Failed to load book details. Please try again.
          </ErrorState>
        </ContentWrapper>
      </PageContainer>
    );
  }

  const { authors, description, amazonUrl, openLibraryUrl, coverId } = 
    processBookData(bookData, firstAuthorData);

  return (
    <PageContainer>
      <ContentWrapper>
        <BackButton onClick={() => navigate("/")}>
          <ArrowLeft size={16} />
          Back to Search
        </BackButton>

        <BookContent>
          <CoverSection>
            <BookCover
              coverId={coverId}
              title={bookData.title}
              width="100%"
              height="auto"
              iconSize={48}
              placeholderSize="14px"
            />
          </CoverSection>

          <DetailsSection>
            <BookHeader
              title={bookData.title}
              authors={authors}
              contributions={bookData.contributions}
            />

            <BookDescription description={description} />

            <BookSubjects subjects={bookData.subjects} />

            <ActionButtons>
              <AmazonButton href={amazonUrl} />
              <ExternalLinkButton href={openLibraryUrl}>
                View on Open Library
              </ExternalLinkButton>
            </ActionButtons>
          </DetailsSection>
        </BookContent>
      </ContentWrapper>
    </PageContainer>
  );
};

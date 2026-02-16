import { useState } from "react";
import styled from "styled-components";
import { Book } from "lucide-react";

const CoverContainer = styled.div<{
  $width: string;
  $height: string;
  $aspectRatio?: string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  ${(props) => props.$aspectRatio && `aspect-ratio: ${props.$aspectRatio};`}
  flex-shrink: 0;
  background-color: var(--color-bg-skeleton);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 60px;
    height: 90px;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div<{ $fontSize?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  color: var(--color-text-tertiary);
  font-size: ${(props) => props.$fontSize || "11px"};
  text-align: center;
  padding: var(--spacing-sm);
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid var(--color-border-light);
  border-top-color: var(--color-dark-green);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface BookCoverProps {
  coverId?: number;
  title: string;
  width: string;
  height: string;
  iconSize?: number;
  placeholderSize?: string;
}

export const BookCover = ({
  coverId,
  title,
  width,
  height,
  iconSize = 32,
  placeholderSize = "11px",
}: BookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : null;

  const aspectRatio = height === "auto" ? "2 / 3" : undefined;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <CoverContainer $width={width} $height={height} $aspectRatio={aspectRatio}>
      {!coverUrl || hasError ? (
        <Placeholder $fontSize={placeholderSize}>
          <Book size={iconSize} />
          <div>No Cover</div>
        </Placeholder>
      ) : (
        <>
          {isLoading && <Spinner />}
          <CoverImage
            src={coverUrl}
            alt={`Cover of ${title}`}
            onLoad={handleLoad}
            onError={handleError}
            style={{ display: isLoading ? "none" : "block" }}
          />
        </>
      )}
    </CoverContainer>
  );
};

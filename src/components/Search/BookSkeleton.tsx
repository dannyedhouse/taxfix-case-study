import styled from "styled-components";
import { Skeleton } from "../ui/Skeleton/Skeleton";

const SkeletonItem = styled.div`
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-md);

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    gap: var(--spacing-sm);
  }
`;

const SkeletonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  justify-content: space-between;
`;

const SkeletonList = styled.div`
  width: 100%;
  padding: var(--spacing-xs);
`;

const CoverSkeleton = styled(Skeleton)`
  @media (max-width: 768px) {
    width: 60px !important;
    height: 90px !important;
  }
`;

export const BookSkeleton = () => {
  return (
    <SkeletonItem>
      <CoverSkeleton width="80px" height="120px" borderRadius="4px" />
      <SkeletonContent>
        <Skeleton width="70%" height="18px" />
        <Skeleton width="60%" height="15px" />
        <Skeleton width="50%" height="14px" />
        <Skeleton width="140px" height="36px" borderRadius="4px" />
      </SkeletonContent>
    </SkeletonItem>
  );
};

export const BookSkeletonList = ({ count = 5 }: { count?: number }) => {
  return (
    <SkeletonList>
      {Array.from({ length: count }).map((_, index) => (
        <BookSkeleton key={index} />
      ))}
    </SkeletonList>
  );
};

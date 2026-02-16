import styled from "styled-components";
import { Skeleton } from "../ui/Skeleton/Skeleton";

const SkeletonItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #ffffff;

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const SkeletonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonList = styled.div`
  width: 100%;
  padding: 8px;
`;

export const BookSkeleton = () => {
  return (
    <SkeletonItem>
      <Skeleton width="60px" height="80px" />
      <SkeletonContent>
        <Skeleton width="70%" height="16px" />
        <Skeleton width="50%" height="14px" />
        <Skeleton width="40%" height="12px" />
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

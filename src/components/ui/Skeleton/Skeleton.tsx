import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  background: linear-gradient(to right, var(--color-bg-skeleton) 0%, var(--color-border-light) 50%, var(--color-bg-skeleton) 100%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
  border-radius: ${({ borderRadius }) => borderRadius || 'var(--radius-sm)'};
`;

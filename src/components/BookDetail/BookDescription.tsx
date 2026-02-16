import styled from "styled-components";

const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
  margin: var(--spacing-md) 0;
  padding: var(--spacing-lg);
  background-color: var(--color-bg-gray-light);
  border-radius: var(--radius-md);
`;

const DescriptionTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`;

interface BookDescriptionProps {
  description?: string;
}

export const BookDescription = ({ description }: BookDescriptionProps) => {
  if (!description) return null;

  return (
    <Description>
      <DescriptionTitle>Description</DescriptionTitle>
      {description}
    </Description>
  );
};

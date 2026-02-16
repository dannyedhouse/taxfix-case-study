import styled from "styled-components";

const SubjectsContainer = styled.div`
  margin-top: var(--spacing-md);
`;

const SubjectsTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
`;

const SubjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
`;

const SubjectTag = styled.span`
  padding: 6px var(--spacing-sm);
  background-color: var(--color-banner-green);
  color: var(--color-dark-green);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
`;

interface BookSubjectsProps {
  subjects?: string[];
  maxTags?: number;
}

export const BookSubjects = ({ subjects, maxTags = 10 }: BookSubjectsProps) => {
  if (!subjects || subjects.length === 0) return null;

  return (
    <SubjectsContainer>
      <SubjectsTitle>Subjects</SubjectsTitle>
      <SubjectTags>
        {subjects.slice(0, maxTags).map((subject, idx) => (
          <SubjectTag key={idx}>{subject}</SubjectTag>
        ))}
      </SubjectTags>
    </SubjectsContainer>
  );
};

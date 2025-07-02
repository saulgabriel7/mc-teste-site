import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Select = styled.select`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const FileInput = styled.input`
  margin-top: 0.5rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: var(--span-color);
    text-decoration: underline;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: var(--span-color);
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: var(--span-color-hover);
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
`;

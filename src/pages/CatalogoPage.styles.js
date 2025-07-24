import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Titulo = styled.div`
  padding: 2.5rem 1rem 1rem;
  text-align: center;

  h1 {
    font-size: 3.125rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.15rem;
    color: var(--subtext-color);
    margin: 0;
  }

  @media (max-width: 560px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Filtro = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 2rem;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  margin: 2rem auto;
  max-width: 1000px;

  select,
  input {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: white;
    color: var(--text-color);
    transition: border 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }
  }

  button {
    padding: 0.85rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    background: var(--accent-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;

    select,
    input,
    button {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: var(--background-color);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    justify-items: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 3rem;

  button {
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;

    &:hover {
      background-color: var(--accent-hover);
      transform: translateY(-2px);
    }

    &.active {
      background-color: var(--primary-color);
    }
  }
`;

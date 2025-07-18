import styled from 'styled-components';

export const Card = styled.div`
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  min-width: 260px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 480px) {
    min-width: 220px;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Infos = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // garante que o botão fique sempre no fim
  flex-grow: 1;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
  }

  p {
    color: var(--subtext-color);
    font-size: 0.95rem;
  }

  strong {
    color: var(--accent-color);
    font-size: 1.2rem;
    font-weight: 600;
  }

  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
  }
`;

export const Botao = styled.button`
  padding: 0.45rem 1rem;
  background: #eaf7ee;
  color: var(--green-color);
  border: 1px solid #c6e8d1;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
`;

export const BotaoC = styled.button`
  padding: 0.6rem;
  background: var(--accent-color);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-hover);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

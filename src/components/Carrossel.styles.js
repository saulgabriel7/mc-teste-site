import styled from 'styled-components';

export const CarrosselContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-inline: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding-inline: 0;
  }
`;

export const CardsScroller = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem 0;
  scroll-behavior: smooth;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 2.4rem;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  z-index: 10;
  border-radius: 50%;
  transition: all 0.25s ease;

  &.left {
    left: -20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.right {
    right: -20px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

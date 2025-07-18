import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background-color: var(--primary-color);
  color: white;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

export const Navegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  img {
    width: 64px;
    height: auto;
  }

  .contato-menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: white;
      gap: 0.5rem;

      img {
        width: 20px;
      }

      a {
        color: white;
        text-decoration: none;
        font-weight: 500;
      }
    }
  }

  .hamburguer {
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .right {
      display: none;
    }
  }
`;

export const MenuCompleto = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  z-index: 100;
  background-color: var(--accent-color);
  color: white;
  font-family: sans-serif;
  transition: opacity 0.4s ease, transform 0.3s ease;
  flex-direction: row;
  flex-wrap: nowrap;

  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

  .menu-lateral {
    width: 20%;
    background-color: var(--background-color);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 2rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 5rem;
    font-weight: bold;
    color: #444;
  }

  .menu-conteudo {
    flex: 1;
    padding: 4rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .fechar {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    section {
      h4 {
        font-weight: 400;
        color: var(--subtext-color);
        margin-bottom: 0.5rem;
      }

      a {
        display: block;
        color: var(--white);
        text-decoration: none;
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
      }
    }
  }

  .contato {
    font-size: 0.9rem;
    color: #ccc;

    img {
      width: 20px;
      margin-right: 0.5rem;
    }

    a {
      margin: 0.35rem 0;
      display: flex;
      align-items: center;
    }
    p {
      margin: 0.35rem 0;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .menu-lateral {
      writing-mode: horizontal-tb;
      width: 100%;
      justify-content: flex-start;
      font-size: 2rem;
      padding: 1rem 2rem;
    }

    .menu-conteudo {
      padding: 2rem;
    }

    .fechar {
      top: 1rem;
      right: 1.5rem;
    }
  }
`;
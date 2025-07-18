import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 4rem 2rem;
  background-color: var(--background-color);

  main {
    max-width: 1200px;
    margin: 0 auto;
  }

  .paragrafo {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }

  @media(max-width:1200px){
    .paragrafo{
      display: flex ;
      justify-content: center;
      align-items: center;
  }

  }

  .paragrafo h2 {
    font-size: 56px;
    line-height: 1.2;
    font-weight: 700;
    max-width: 550px;
  }

  @media(max-width: 768px) {
    .paragrafo h2 {
      font-size: 42px;
    }
  }

  .paragrafo h2 span {
    color: var(--span-color);
    display: block;
  }

  .paragrafo p {
    max-width: 500px;
    font-size: 15px;
    line-height: 1.6;
    color: var(--darker-text-color);
    text-align: justify;
  }

  .img-destaques {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
  }

  .card {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card.destaque {
    grid-row: span 3;
    border-radius: 24px;
    box-sizing: border-box;
  }

.Destaques {
  padding-block: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
}

.Destaques h2 {
  font-size: 42px;
  font-weight: 700;
  color: var(--text-color);
}

.btn {
  display: flex;
  align-items: center;
}

.btn button {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.2rem;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.btn button:hover {
  background-color: var(--accent-hover);
}

.img {
  filter: invert(1);
  width: 20px;
  transition: transform 0.3s ease;
}

.btn button:hover .img {
  transform: translateX(4px);
}

`;
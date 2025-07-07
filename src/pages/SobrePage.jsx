// src/pages/SobrePage.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import { Loader } from '../components/Loader';

const Wrapper = styled.div`
h1 {
    text-align: center;
    font-size: 3.125rem;
    color: var(--primary-color);
  }
  h2 {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.5rem;    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    text-align: justify;
  }
`;

const HeroSection = styled.section`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding-inline: 2rem;
  padding-bottom: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${(props) => (props.highlight ? 'var(--span-color)' : '#fff')};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.highlight ? '#fff' : 'var(--text-color)')};
  }

  p {
    color: ${(props) => (props.highlight ? '#fff' : 'var(--text-color)')};
    font-size: 0.9rem;
  }
`;

const SectionTitle = styled.h2`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.75rem;
  font-weight: 500;
  color: #222;
`;

export function SobrePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Wrapper>
      <Header />
      <HeroSection>
        <h1>Sobre Nós</h1>
        <p>Somos uma empresa especializada no mercado imobiliário, comprometida em conectar pessoas aos imóveis ideais para suas vidas e negócios. Com uma equipe experiente e apaixonada, atuamos com transparência, inovação e proximidade com nossos clientes.</p>
      </HeroSection>

      <SectionTitle>Nossos Pilares</SectionTitle>
      <CardGrid>
        <Card>
          <h3>Missão</h3>
          <p>Facilitar a realização de sonhos por meio da compra, venda ou locação de imóveis, entregando um atendimento humanizado e soluções sob medida.</p>
        </Card>
        <Card highlight>
          <h3>Visão</h3>
          <p>Ser referência no mercado imobiliário pela excelência no atendimento e pela inovação em nossos processos.</p>
        </Card>
        <Card>
          <h3>Valores</h3>
          <p>Atuamos com ética, promovemos a simplicidade, assumimos responsabilidades e colocamos o cliente no centro de tudo o que fazemos.</p>
        </Card>
      </CardGrid>

      <Section>
        <h2>Nossa História</h2>
        <p>
          Fundada em 2010, nossa empresa começou com um pequeno escritório e o sonho de transformar vidas por meio de bons negócios.
          Hoje, com centenas de imóveis em nosso portfólio, seguimos firmes no propósito de crescer com nossos clientes.
        </p>
      </Section>


      <Footer />
    </Wrapper>
  );
}

// CatalogoPage.tsx

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import { CardImovel } from '../components/CardImovel';
import { imoveisMock } from '../data/imoveisMock';
import { Loader } from '../components/Loader';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Titulo = styled.div`
  padding: 2rem 1rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0;
  }

  @media (max-width: 560px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const FiltrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem 1rem;
  justify-content: center;
  background-color: var(--background-color);

  select, input {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: white;
    color: var(--text-color);
    transition: border 0.2s ease;
  }

  select:focus, input:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: var(--accent-hover);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: stretch;

    select, input, button {
      max-width: 100%;
      width: 100%;
    }
  }
`;

const GridImoveis = styled.div`
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

export function CatalogoPage() {
  const [searchParams] = useSearchParams();

  const [cidade, setCidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [precoMax, setPrecoMax] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCidade(searchParams.get('cidade') || '');
    setTipo(searchParams.get('tipo') || '');
    setPrecoMax(searchParams.get('preco') || '');
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = 'Imóveis - MC Acessoria Imobiliária';
  }, []);

  const filtrarImoveis = () => {
    return imoveisMock.filter((item) => {
      const passaCidade = cidade ? item.cidade === cidade : true;
      const passaTipo = tipo ? item.tipo === tipo : true;
      const preco = +item.preco.replace(/\D/g, '');
      const passaPreco = precoMax ? preco <= +precoMax : true;
      return passaCidade && passaTipo && passaPreco;
    });
  };

  const cidadesUnicas = [...new Set(imoveisMock.map((i) => i.cidade))];

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <PageContainer>
        <Titulo>
          <h1>Todos os Imóveis</h1>
        </Titulo>

        <FiltrosContainer>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Todos os Tipos</option>
            <option value="venda">Venda</option>
            <option value="locacao">Locação</option>
          </select>

          <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
            <option value="">Todas as Cidades</option>
            {cidadesUnicas.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Preço Máximo (R$)"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
            min={0}
            step={10}
          />

          <button onClick={() => {
            setCidade('');
            setTipo('');
            setPrecoMax('');
          }}>
            Limpar Filtros
          </button>
        </FiltrosContainer>

        <GridImoveis>
          {filtrarImoveis().map((item) => (
            <CardImovel key={item.id} item={item} />
          ))}
        </GridImoveis>
      </PageContainer>
      <Footer />
    </>
  );
}

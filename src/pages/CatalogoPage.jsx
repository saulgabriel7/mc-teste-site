import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import { CardImovel } from '../components/CardImovel';
import { imoveisMock } from '../data/imoveisMock';
import { Loader } from '../components/Loader';

const FiltrosContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background: #f9f9f9;
  justify-content: center;

  select, input {
    padding: 0.7rem 1rem;
    font-size: 1rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    background-color: white;
    transition: all 0.3s ease;
    max-width: 300px;
    flex: 1;
  }

  select:focus, input:focus {
    outline: none;
    border-color: var(--span-color);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  button {
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    border-radius: 12px;
    border: none;
    background-color:var(--span-color);
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
    flex-shrink: 0;
  }

  button:hover {
    background-color: var(--span-color-hover);
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;

    select, input, button {
      width: 100%;
      max-width: 300px;
    }
  }
`;
const Titulo = styled.div`
  padding: 2rem;
  text-align: center;
  h1 {
    font-size: 3.125rem;
    color: var(--primary-color);
    font-weight: bold;        
  }
  @media (max-width: 560px) {
    padding: 1rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

const GridImoveis = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
`;

const PageContainer = styled.div`
@media (max-width: 560px) {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
          max={10000}
          step={10}
        />
        <button onClick={() => {
                  setCidade('');
                  setTipo('');
                  setPrecoMax('');
                }}>Limpar Filtros</button>      
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

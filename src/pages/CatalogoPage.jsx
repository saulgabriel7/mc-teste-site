import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import { CardImovel } from '../components/CardImovel';
import { imoveisMock } from '../data/imoveisMock';
import { Loader } from '../components/Loader';

import { 
  Container, 
  Title, 
  Filters, 
  Grid, 
  Pagination } from './CatalogoPage.styles';

export function CatalogoPage() {
  const [searchParams] = useSearchParams();

  const [cidade, setCidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [precoMax, setPrecoMax] = useState('');
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 15; 

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

  // filtros dos imóveis
  const filtrar = () => {
    return imoveisMock.filter((item) => {
      const condCidade = cidade ? item.cidade === cidade : true;
      const condTipo = tipo ? item.tipo === tipo : true;
      const preco = +item.preco.replace(/\D/g, '');
      const condPreco = precoMax ? preco <= +precoMax : true;
      return condCidade && condTipo && condPreco;
    });
  };

  const cidades = [...new Set(imoveisMock.map((i) => i.cidade))];

  const imoveisFiltrados = filtrar();
  const totalPaginas = Math.ceil(imoveisFiltrados.length / itensPorPagina);
  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Explore Nossos Imóveis</h1>
          <p>Encontre Imóveis Comerciais, apartamentos e casas com os melhores preços</p>
        </Title>

        <Filters>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Todos os Tipos</option>
            <option value="venda">Venda</option>
            <option value="locacao">Locação</option>
          </select>

          <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
            <option value="">Todas as Cidades</option>
            {cidades.map((c) => (
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

          <button
            onClick={() => {
              setCidade('');
              setTipo('');
              setPrecoMax('');
              setPagina(1); // resetar página ao limpar filtros
            }}
          >
            Limpar Filtros
          </button>
        </Filters>

        <Grid>
          {imoveisFiltrados.slice(inicio, fim).map((item) => (
            <CardImovel key={item.id} item={item} />
          ))}
        </Grid>

        {totalPaginas > 1 && (
          <Pagination>
            {Array.from({ length: totalPaginas }).map((_, i) => (
              <button
                key={i}
                className={pagina === i + 1 ? 'active' : ''}
                onClick={() => setPagina(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </Pagination>
        )}
      </Container>
      <Footer />
    </>
  );
}

export interface Imovel {
    id: number;
    codigo: string;
    tipo: 'locacao' | 'venda';
    imagem: string;
    imagens: string[];
    imovel: string;
    descricao: string;
    cidade: string;
    bairro: string;
    preco: string;
}

export const imoveis: Imovel[] = [
    {
        id: 1,
        codigo: 'IMV001',
        tipo: 'locacao',
        imagem: '/IMV001/1.jpeg',
        imagens: Array.from({ length: 18 }, (_, i) => `/IMV001/${i + 1}.jpeg`),
        imovel: 'Galpão, 1566 m² - Vila Cardoso - Capivari/SP',
        descricao: 'Excelente galpão comercial de 1.566 m² localizado na estratégica Vila Cardoso, em Capivari/SP. Ideal para grandes operações como supermercados, concessionárias de veículos ou centros de distribuição. Conta com amplo espaço interno, pé direito elevado para facilitar a logística, áreas adequadas para carga e descarga, estacionamento para colaboradores e clientes, além de fácil acesso às principais rodovias da região.',
        cidade: 'Capivari',
        bairro: 'Vila Cardoso',
        preco: 'R$ 50.000 / mês'
    },
    {
        id: 2,
        codigo: 'IMV002',
        tipo: 'locacao',
        imagem: '/IMV002/1.jpeg',
        imagens: Array.from({ length: 10 }, (_, i) => `/IMV002/${i + 1}.jpeg`),
        imovel: 'Galpão, 949 m² - Bela Vista/SP',
        descricao: 'Galpão com 949 m² de área total, situado no bairro Bela Vista, São Paulo. Excelente fluxo de pedestres e veículos, ideal para empresas que necessitam de boa visibilidade e acessibilidade. Espaço versátil para armazenamento, comércio ou serviços.',
        cidade: 'São Paulo',
        bairro: 'Bela Vista',
        preco: 'R$ 25.000 / mês'
    },
    {
        id: 3,
        codigo: 'IMV003',
        tipo: 'locacao',
        imagem: '/IMV003/1.jpeg',
        imagens: Array.from({ length: 21 }, (_, i) => `/IMV003/${i + 1}.jpeg`),
        imovel: 'Galpão, 1000m² - Ubatuba/SP',
        descricao: 'Galpão comercial de 1.000 m² localizado no centro de Ubatuba, perfeito para diversos segmentos comerciais. Estrutura robusta com pé direito alto, área ampla para armazenamento.',
        cidade: 'Ubatuba',
        bairro: 'Centro',
        preco: 'R$ 35.000 / mês'
    },
    {
        id: 4,
        codigo: 'IMV004',
        tipo: 'locacao',
        imagem: '/IMV004/1.jpeg',
        imagens: Array.from({ length: 59 }, (_, i) => `/IMV004/${i + 1}.jpeg`),
        imovel: 'Galpão, 1350m² - Vila Nova Cachoeirinha/SP',
        descricao: 'Galpão comercial com 1.350 m² de área construída, localizado na Vila Nova Cachoeirinha, São Paulo. Espaço amplo, com pé direito elevado e infraestrutura adequada para operações logísticas, armazenamento ou produção.',
        cidade: 'São Paulo',
        bairro: 'Vila Nova Cachoeirinha',
        preco: 'R$ 24.000 / mês'
    },
    {
        id: 5,
        codigo: 'IMV005',
        tipo: 'locacao',
        imagem: '/IMV005/1.jpeg',
        imagens: ['/IMV005/1.jpeg'],
        imovel: 'Galpão, 1596m² - São José dos Campos',
        descricao: 'Galpão industrial com 1.596 m² localizado na Vila Industrial, São José dos Campos. Estrutura moderna, pé direito alto, espaço para carga e descarga.',
        cidade: 'São José dos Campos',
        bairro: 'Vila Industrial',
        preco: 'R$ 60.000 / mês'
    },
    {
        id: 6,
        codigo: 'IMV006',
        tipo: 'locacao',
        imagem: '/IMV006/2.jpeg',
        imagens: Array.from({ length: 47 }, (_, i) => `/IMV006/${i + 2}.jpeg`),
        imovel: 'Galpão, 1400m² - Centro São José dos Campos',
        descricao: 'Espaçoso galpão de 1.400 m² no Centro de São José dos Campos, ideal para empresas que buscam visibilidade e acessibilidade central.',
        cidade: 'São José dos Campos',
        bairro: 'Centro',
        preco: 'R$ 28.000 / mês'
    },
    {
        id: 7,
        codigo: 'IMV007',
        tipo: 'locacao',
        imagem: '/IMV007/1.jpeg',
        imagens: Array.from({ length: 7 }, (_, i) => `/IMV007/${i + 1}.jpeg`),
        imovel: 'Galpão, 1226m² - Vila Guilherme/SP',
        descricao: 'Galpão com 1.226 m² distribuídos em dois pavimentos, localizado na Vila Guilherme, São Paulo. Estrutura completa para armazenamento, produção ou logística.',
        cidade: 'São Paulo',
        bairro: 'Vila Guilherme',
        preco: 'R$ 45.000 / mês'
    },
    {
        id: 8,
        codigo: 'IMV008',
        tipo: 'locacao',
        imagem: '/IMV008/1.jpeg',
        imagens: Array.from({ length: 7 }, (_, i) => `/IMV008/${i + 1}.jpeg`),
        imovel: 'Galpão, 1000m² - Valinhos/SP',
        descricao: 'Galpão comercial de 1.000 m² no bairro Santa Cruz, Valinhos. Estrutura moderna, pé direito alto, área ampla para armazenamento e operações.',
        cidade: 'Valinhos',
        bairro: 'Santa Cruz',
        preco: 'R$ 50.000 / mês'
    },
    {
        id: 9,
        codigo: 'IMV009',
        tipo: 'locacao',
        imagem: '/IMV009/1.jpeg',
        imagens: Array.from({ length: 10 }, (_, i) => `/IMV009/${i + 1}.jpeg`),
        imovel: 'Galpão, 900m² - Vila Jacuí/SP',
        descricao: 'Galpão com 900 m² localizado na Vila Jacuí, São Paulo. Espaço funcional com pé direito adequado, áreas para carga e descarga, estacionamento e fácil acesso.',
        cidade: 'São Paulo',
        bairro: 'Vila Jacuí',
        preco: 'R$ 50.000 / mês'
    },
    {
        id: 10,
        codigo: 'IMV010',
        tipo: 'locacao',
        imagem: '/IMV010/1.jpeg',
        imagens: Array.from({ length: 7 }, (_, i) => `/IMV010/${i + 1}.jpeg`),
        imovel: 'Galpão, 1500m² - Ribeirão Pires/SP',
        descricao: 'Galpão com 1.500 m² localizado em Ribeirão Pires, São Paulo. Estrutura ampla, ideal para operações logísticas e industriais.',
        cidade: 'Ribeirão Pires',
        bairro: 'Centro',
        preco: 'R$ 70.000 / mês'
    },
    {
        id: 11,
        codigo: 'IMV011',
        tipo: 'locacao',
        imagem: '/IMV011/2.jpeg',
        imagens: Array.from({ length: 20 }, (_, i) => `/IMV011/${i + 2}.jpeg`),
        imovel: 'Galpão, 1485m² - Saúde/SP',
        descricao: 'Galpão com 1.485 m² localizado na Saúde, São Paulo. Estrutura completa para armazenamento e operações.',
        cidade: 'São Paulo',
        bairro: 'Saúde',
        preco: 'R$ 50.000 / mês'
    },
    {
        id: 12,
        codigo: 'IMV012',
        tipo: 'locacao',
        imagem: '/IMV012/2.jpeg',
        imagens: Array.from({ length: 17 }, (_, i) => `/IMV012/${i + 2}.jpeg`),
        imovel: 'Galpão, 1400m² - Guaianases/SP',
        descricao: 'Galpão com 1.400 m² localizado em Guaianases, São Paulo. Estrutura ampla, ideal para operações logísticas e industriais.',
        cidade: 'São Paulo',
        bairro: 'Guaianases',
        preco: 'R$ 60.000 / mês'
    },
    {
        id: 13,
        codigo: 'IMV013',
        tipo: 'locacao',
        imagem: '/IMV013/2.jpeg',
        imagens: Array.from({ length: 8 }, (_, i) => `/IMV013/${i + 2}.jpeg`),
        imovel: 'Galpão, 900m² - São Caetano do Sul/SP',
        descricao: 'Galpão conta com 900m² e está localizado em São Caetano do Sul, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'São Caetano do Sul',
        bairro: 'Santa Paula',
        preco: 'R$ 45.000 / mês'
    },
    {
        id: 14,
        codigo: 'IMV014',
        tipo: 'locacao',
        imagem: '/IMV014/2.jpeg',
        imagens: Array.from({ length: 8 }, (_, i) => `/IMV014/${i + 2}.jpeg`),
        imovel: 'Galpão, 1500m² - Vila das Belezas/SP',
        descricao: 'Galpão conta com 1500m² e está localizado em São Paulo, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'São Paulo',
        bairro: 'Vila das Belezas',
        preco: 'R$ 65.000 / mês'
    },
    {
        id: 15,
        codigo: 'IMV015',
        tipo: 'locacao',
        imagem: '/IMV015/2.jpeg',
        imagens: Array.from({ length: 10 }, (_, i) => `/IMV015/${i + 2}.jpeg`),
        imovel: 'Galpão, 2000m² - Juiz de Fora/MG',
        descricao: 'Galpão conta com 2000m² e está localizado em Juiz de Fora/MG, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'Juiz de Fora',
        bairro: 'Centro',
        preco: 'R$ 50.000 / mês'
    },
    {
        id: 16,
        codigo: 'IMV016',
        tipo: 'locacao',
        imagem: '/IMV016/1.jpeg',
        imagens: Array.from({ length: 20 }, (_, i) => `/IMV016/${i + 1}.jpeg`),
        imovel: 'Galpão, 1000m² - Campo Mourão/PR',
        descricao: 'Galpão conta com 1000m² e está localizado em Campo Mourão, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'Campo Mourão',
        bairro: 'Centro',
        preco: 'R$ 28.000 / mês'
    },
    {
        id: 17,
        codigo: 'IMV017',
        tipo: 'locacao',
        imagem: '/IMV017/1.jpeg',
        imagens: Array.from({ length: 10 }, (_, i) => `/IMV017/${i + 1}.jpeg`),
        imovel: 'Galpão, 1250m² - São Bernardo do Campo/SP',
        descricao: 'Galpão conta com 1250m² e está localizado em São Bernardo do Campo, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'São Bernardo do Campo',
        bairro: 'Jardim do Mar',
        preco: 'R$ 28.000 / mês'
    },
    {
        id: 18,
        codigo: 'IMV018',
        tipo: 'locacao',
        imagem: '/IMV018/1.jpeg',
        imagens: Array.from({ length: 10 }, (_, i) => `/IMV018/${i + 1}.jpeg`),
        imovel: 'Galpão, 1250m² - Taquara/RJ',
        descricao: 'Galpão conta com 1250m² e está localizado em Taquara, Rio de Janeiro, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'Rio de Janeiro',
        bairro: 'Taquara',
        preco: 'R$ 45.000 / mês'
    },
    {
        id: 19,
        codigo: 'IMV019',
        tipo: 'locacao',
        imagem: '/IMV019/1.jpeg',
        imagens: Array.from({ length: 17 }, (_, i) => `/IMV019/${i + 1}.jpeg`),
        imovel: 'Galpão, 2000m² - Ramos/RJ',
        descricao: 'Galpão conta com 2000m² e está localizado em Ramos, Rio de Janeiro, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'Rio de Janeiro',
        bairro: 'Ramos',
        preco: 'R$ 45.000 / mês'
    },
    {
        id: 20,
        codigo: 'IMV020',
        tipo: 'locacao',
        imagem: '/IMV020/1.jpeg',
        imagens: Array.from({ length: 54 }, (_, i) => `/IMV020/${i + 1}.jpeg`),
        imovel: 'Galpão, 1700m² - Vila Esperança/SP',
        descricao: 'Galpão conta com 1700m² e está localizado em São Paulo, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'São Paulo',
        bairro: 'Vila Esperança',
        preco: 'R$ 55.000 / mês'
    },
    {
        id: 21,
        codigo: 'IMV021',
        tipo: 'locacao',
        imagem: '/IMV021/1.jpeg',
        imagens: Array.from({ length: 17 }, (_, i) => `/IMV021/${i + 1}.jpeg`),
        imovel: 'Galpão, 3000m² - Vila Caravela/SP',
        descricao: 'Galpão conta com 3000m² e está localizado em São Paulo, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'São Paulo',
        bairro: 'Vila Caravela',
        preco: 'R$ 150.000 / mês'
    },
    {
        id: 22,
        codigo: 'IMV022',
        tipo: 'locacao',
        imagem: '/IMV022/1.jpeg',
        imagens: Array.from({ length: 38 }, (_, i) => `/IMV022/${i + 1}.jpeg`),
        imovel: 'Galpão, 1750m² - Vila Esperança/SP',
        descricao: 'Galpão conta com 1750m² e 40 vagas de estacionamento, localizado em São Paulo, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'São Paulo',
        bairro: 'Vila Esperança',
        preco: 'R$ 160.000 / mês'
    },
    {
        id: 23,
        codigo: 'IMV023',
        tipo: 'locacao',
        imagem: '/IMV023/1.jpg',
        imagens: Array.from({ length: 32 }, (_, i) => `/IMV023/${i + 1}.jpg`),
        imovel: 'Sobrado Comercial, 447m² - Centro/Itu',
        descricao: 'Sobrado Comercial - AC 447,05 m² e AT 840,93 m², localizado em Itu, ideal para empresas que buscam um espaço funcional e bem localizado.',
        cidade: 'Itu',
        bairro: 'Centro',
        preco: 'R$ 15.000 / mês'
    },
    {
        id: 24,
        codigo: 'IMV024',
        tipo: 'locacao',
        imagem: '/IMV024/1.jpg',
        imagens: [
            '/IMV024/1.jpg', '/IMV024/2.jpg', '/IMV024/3.jpg', '/IMV024/4.jpg', '/IMV024/5.jpg',
            '/IMV024/6.png', '/IMV024/7.jpeg', '/IMV024/8.jpeg', '/IMV024/9.jpeg', '/IMV024/10.jpeg',
            '/IMV024/11.jpeg', '/IMV024/12.jpeg', '/IMV024/13.jpeg', '/IMV024/14.jpeg', '/IMV024/15.jpeg',
            '/IMV024/16.jpeg', '/IMV024/17.jpeg'
        ],
        imovel: 'Salão Comercial, 585m² - Liberdade/Itu',
        descricao: 'Salão com AC 585 m² e área de estacionamento de 950 m². Com proteção acústica nas paredes do salão principal.',
        cidade: 'Itu',
        bairro: 'Liberdade',
        preco: 'R$ 15.000 / mês'
    },
    {
        id: 25,
        codigo: 'IMV025',
        tipo: 'locacao',
        imagem: '/IMV025/1.jpeg',
        imagens: ['/IMV025/1.jpeg'],
        imovel: 'Salão Comercial, 1000m² - Jardim Europa I/Avaré',
        descricao: 'Salão com 1000m² de área útil e 800m² de estacionamento.',
        cidade: 'Avaré',
        bairro: 'Jardim Europa I',
        preco: 'R$ 25.000 / mês'
    },
    {
        id: 26,
        codigo: 'IMV026',
        tipo: 'locacao',
        imagem: '/IMV026/1.jpeg',
        imagens: ['/IMV026/1.jpeg'],
        imovel: 'Salão Comercial, 1000m² - Butantã/SP',
        descricao: 'Salão com 1000m² de área útil e 2 estacionamentos.',
        cidade: 'São Paulo',
        bairro: 'Butantã',
        preco: 'R$ 48.000 / mês'
    },
    {
        id: 27,
        codigo: 'IMV027',
        tipo: 'venda',
        imagem: '/IMV027/1.jpeg',
        imagens: Array.from({ length: 66 }, (_, i) => `/IMV027/${i + 1}.jpeg`),
        imovel: 'Casa Jardim Maraca - SP',
        descricao: 'Casa com 4 suítes, 2 salas, 2 lavanderias, cozinha, copa, 6 vagas de garagem e área de churrasco.',
        cidade: 'São Paulo',
        bairro: 'Jardim Maraca',
        preco: 'R$ 750.000,00'
    },
    {
        id: 28,
        codigo: 'IMV028',
        tipo: 'venda',
        imagem: '/IMV028/1.jpeg',
        imagens: Array.from({ length: 52 }, (_, i) => `/IMV028/${i + 1}.jpeg`),
        imovel: 'Casa Parque Maria Helena - SP',
        descricao: 'Casa com 3 dormitórios, sala, copa, cozinha, área de serviço, área de churrasco, piscina e 3 vagas de garagem. Aceita permuta por Chácara.',
        cidade: 'São Paulo',
        bairro: 'Parque Maria Helena',
        preco: 'R$ 1.600.000,00'
    },
    {
        id: 29,
        codigo: 'IMV029',
        tipo: 'venda',
        imagem: '/IMV029/1.jpeg',
        imagens: Array.from({ length: 24 }, (_, i) => `/IMV029/${i + 1}.jpeg`),
        imovel: 'Apartamento Morumbi 90m² - São Paulo/SP',
        descricao: 'Apartamento com 3 suítes, sala, cozinha, lavanderia e 4 vagas de garagem.',
        cidade: 'São Paulo',
        bairro: 'Morumbi',
        preco: 'R$ 800.000,00'
    },
    {
        id: 30,
        codigo: 'IMV030',
        tipo: 'locacao',
        imagem: '/IMV030/1.jpeg',
        imagens: Array.from({ length: 4 }, (_, i) => `/IMV030/${i + 1}.jpeg`),
        imovel: 'Galpão, 1400m² - Jabaquara/SP',
        descricao: 'Galpão com 1400m², 40 vagas. IPTU R$ 20.000 mensal.',
        cidade: 'São Paulo',
        bairro: 'Jabaquara',
        preco: 'R$ 90.000 / mês'
    },
    {
        id: 31,
        codigo: 'IMV031',
        tipo: 'venda',
        imagem: '/IMV031/1.jpeg',
        imagens: Array.from({ length: 52 }, (_, i) => `/IMV031/${i + 1}.jpeg`),
        imovel: 'Casa Parque Maria Helena - SP',
        descricao: 'Casa com 3 dormitórios, sala, copa, cozinha, área de serviço, área de churrasco, piscina e 3 vagas de garagem. Aceita permuta por Chácara.',
        cidade: 'Suzano',
        bairro: 'Parque Maria Helena',
        preco: 'R$ 1.600.000,00'
    },
    {
        id: 32,
        codigo: 'IMV032',
        tipo: 'locacao',
        imagem: '/IMV032/1.jpeg',
        imagens: Array.from({ length: 21 }, (_, i) => `/IMV032/${i + 1}.jpeg`),
        imovel: 'Imóvel Comercial, 250m² - Morumbi/SP',
        descricao: 'Imóvel com 250m² e 40 vagas.',
        cidade: 'São Paulo',
        bairro: 'Morumbi',
        preco: 'R$ 25.000 / mês'
    },
    {
        id: 33,
        codigo: 'IMV033',
        tipo: 'locacao',
        imagem: '/IMV033/1.jpeg',
        imagens: Array.from({ length: 38 }, (_, i) => `/IMV033/${i + 1}.jpeg`),
        imovel: 'Galpão, 1750m² - Vila Esperança/SP',
        descricao: 'Galpão com 1750m², 400m² de mezanino, elevador, 17 banheiros, 40 vagas. Localizado a 600m do metrô Vila Matilde.',
        cidade: 'São Paulo',
        bairro: 'Vila Esperança',
        preco: 'R$ 150.000 / mês'
    },
    {
        id: 34,
        codigo: 'IMV034',
        tipo: 'locacao',
        imagem: '/IMV034/1.jpeg',
        imagens: Array.from({ length: 19 }, (_, i) => `/IMV034/${i + 1}.jpeg`),
        imovel: 'Galpão, 2000m² - Grajaú/SP',
        descricao: 'Galpão com 2000m² e 50 vagas.',
        cidade: 'São Paulo',
        bairro: 'Grajaú',
        preco: 'R$ 30.000 / mês'
    }
];

export function getImovelByCodigo(codigo: string): Imovel | undefined {
    return imoveis.find(i => i.codigo.toUpperCase() === codigo.toUpperCase());
}

export function getAllCidades(): string[] {
    return [...new Set(imoveis.map(i => i.cidade))].sort();
}

export function filterImoveis(filters: { tipo?: string; cidade?: string; precoMax?: number }): Imovel[] {
    return imoveis.filter(item => {
        const matchTipo = !filters.tipo || item.tipo === filters.tipo;
        const matchCidade = !filters.cidade || item.cidade === filters.cidade;
        const preco = parseInt(item.preco.replace(/\D/g, ''));
        const matchPreco = !filters.precoMax || preco <= filters.precoMax;
        return matchTipo && matchCidade && matchPreco;
    });
}

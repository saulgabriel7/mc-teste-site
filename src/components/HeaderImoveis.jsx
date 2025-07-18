import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerHeader, Navegacao, MenuCompleto,} from './HeaderImoveis.styles';
import logo from '../assets/logo.png';
import whats from '../assets/whatsapp.svg';

export function Header() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  const handleNavigation = (e, path) => {
  e.preventDefault();
  navigate(path);
  setMenuAberto(false);
};


  return (
    <ContainerHeader>
      <Navegacao>
      

        <div>
          <a href="/" onClick={(e) => handleNavigation(e, '/')}>
            <img src={logo} alt="Logo da MC Imobiliária" />
          </a>
        </div>

        <div className="contato-menu">
          <div className='right'>
            <span>
              <img src={whats} alt="whatsapp logo" />
              <a href="https://wa.me/5511947708668?text=Oi,%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F" target='_blank'> (11) 94770-8668</a>
            </span>
          </div>
          <div className='hamburguer' onClick={() => setMenuAberto(true)}>☰</div>
        </div>
      </Navegacao>


       <MenuCompleto open={menuAberto}>
              <div className="menu-lateral">Menu</div>
              <div className="menu-conteudo">
                <div className="fechar" onClick={() => setMenuAberto(false)}>✕</div>
      
                <div className="links">
                  <section>
                    <a href="/" onClick={(e) => handleNavigation(e, '/')}>Home</a>
                  </section>
      
                <section>
                  <h4>Para Proprietários</h4>
                  <a href="/indique-seu-imovel" onClick={(e) => handleNavigation(e, '/indique-seu-imovel')}>Indique seu imóvel</a>
                  <a href="https://wa.me/5511947708668?text=Olá,%20gostaria%20de%20anunciar%20meu%20imóvel%20no%20site.%20Pode%20me%20ajudar%3F" target='_blank'>Fale com o corretor</a>
                </section>
      
                  <section>
                    <h4>Sobre Nós</h4>
                    <Link to="/sobre">Conheça a MC Imóveis</Link>
                  </section>
      
                  <section>
                    <h4>Nossos Serviços</h4>
                    <Link href="/imoveis" onClick={(e) => handleNavigation(e, '/imoveis')}>Encontre o imóvel ideal para você</Link>
                  </section>

                  <section>
                    <h4>Entre em Contato</h4>
                    <a href="https://wa.me/5511947708668?text=Oi,%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F" target='_blank'>Fale com nossa equipe</a>
                  </section>
                </div>
      
                <div className="contato">
                  <a href="https://wa.me/5511947708668?text=Oi,%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F" target='_blank'><img src={whats} alt="whatsapp" />(11) 94770-8668 (WhatsApp)</a>
                  <p>MC Imóveis</p>
                </div>
              </div>
            </MenuCompleto>

    </ContainerHeader>
  );
}

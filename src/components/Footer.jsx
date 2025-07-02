import React from 'react';
import logo from '../assets/logo-fundo.svg';
import { StyledFooterContainer } from '../components/Footer.styles.js';

export function Footer() {
  return (
    <StyledFooterContainer>
        <div className="footer-logo">
            <img src={logo} alt="Logo MC Imobiliária" />
        </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h3>Sobre Nós</h3>
          <p>
            Conectando pessoas ao lar dos seus sonhos. Especialistas em compra, venda e aluguel de imóveis, oferecemos atendimento personalizado e as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="footer-column">
          <h3>Contatos</h3>
          <h4>Whatsapp</h4>
          <p>+55 11 94770-8668</p>
          <p>Segunda a Sexta das 9h às 18h</p>
          <h4>Email</h4>
          <p>mc.imoveis11@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Links Úteis</h3>
          <a href="/imoveis" onClick={(e) => handleNavigation(e, '/imoveis')}>Todos os imóveis</a>
          <a href="/sobre" onClick={(e) => handleNavigation(e, '/sobre')}>Quem Somos</a>
          <a href="/indique-seu-imovel" onClick={(e) => handleNavigation(e, '/indique-seu-imovel')}>Indique seu imóvel</a>
          <a href="https://wa.me/5511947708668?text=Oi,%20vim%20pelo%20site%2C%20poderia%20me%20ajudar%3F" target='_blank'>Contato</a>
        </div>
      </div>

      <hr />
      <div className="copyright">
        © 2025 MC Imóveis. Todos os direitos reservados.
      </div>
    </StyledFooterContainer>
  );
}

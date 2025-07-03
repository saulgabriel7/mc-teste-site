// src/pages/PoliticaPrivacidadePage.jsx
import React from 'react';
import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 900px;
  margin: 2rem auto 4rem;
  padding: 0 1rem;
  line-height: 1.6;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--span-color);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

export function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <Container>
        <Title>Política de Privacidade</Title>

        <Paragraph>
          Esta política de privacidade explica como coletamos, usamos e protegemos as informações fornecidas por você através do nosso formulário de contato.
        </Paragraph>

        <SectionTitle>1. Dados coletados</SectionTitle>
        <Paragraph>
          Coletamos os dados pessoais que você nos fornece ao preencher o formulário, tais como nome, e-mail, telefone, endereço, descrição do imóvel e outros detalhes relevantes.
        </Paragraph>

        <SectionTitle>2. Uso dos dados</SectionTitle>
        <Paragraph>
          Utilizamos suas informações exclusivamente para responder ao seu contato, processar solicitações e fornecer informações relacionadas ao serviço solicitado.
        </Paragraph>

        <SectionTitle>3. Compartilhamento dos dados</SectionTitle>
        <Paragraph>
          Seus dados não serão vendidos, compartilhados ou transferidos a terceiros sem seu consentimento, exceto quando exigido por lei.
        </Paragraph>

        <SectionTitle>4. Segurança</SectionTitle>
        <Paragraph>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração.
        </Paragraph>

        <SectionTitle>5. Armazenamento dos dados</SectionTitle>
        <Paragraph>
          Os dados coletados são armazenados pelo tempo necessário para atender à finalidade para a qual foram coletados ou conforme obrigações legais.
        </Paragraph>

        <SectionTitle>6. Seus direitos</SectionTitle>
        <Paragraph>
          Você tem direito de acessar, corrigir, solicitar a exclusão ou portabilidade dos seus dados. Para isso, entre em contato conosco pelo e-mail ou telefone informados no formulário.
        </Paragraph>

        <SectionTitle>7. Consentimento</SectionTitle>
        <Paragraph>
          Ao enviar o formulário, você concorda com os termos desta política de privacidade e com o tratamento dos seus dados conforme descrito.
        </Paragraph>

        <SectionTitle>8. Contato</SectionTitle>
        <Paragraph>
          Caso tenha dúvidas sobre nossa política de privacidade, entre em contato conosco pelo e-mail mc.imoveis11@gmail.com
        </Paragraph>

        <Paragraph>
          Atualizado em: 02 de Julho de 2025
        </Paragraph>
      </Container>
      <Footer />
    </>
  );
}

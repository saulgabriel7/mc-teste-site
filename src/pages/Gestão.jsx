// src/pages/GestaoImoveisPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { Header } from '../components/HeaderImoveis';
import { Footer } from '../components/Footer';
import { Loader } from '../components/Loader';

import {
  PageContainer,
  Title,
  Form,
  Row,
  Input,
  TextArea,
  Select,
  CheckboxContainer,
  ButtonSubmit,
} from '../pages/gestao.styles';

export function GestaoImoveisPage() {
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cwx4y2v',
        'template_snut1tq',
        formRef.current,
        'RoRnAdf54udmDVs7j'
      )
      .then(
        () => {
          setModalMessage('Formulário enviado com sucesso!');
          setModalVisible(true);
          formRef.current.reset();
        },
        (error) => {
          setModalMessage('Erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
          setModalVisible(true);
          console.error('Erro ao enviar:', error);
        }
      );
  };

  if (loading) return <Loader />;

  // Modal component dentro do arquivo para clareza
  const Modal = ({ message, onClose }) => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: 'var(--background-color)',
          padding: 24,
          borderRadius: 8,
          maxWidth: 400,
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        <p style={{ marginBottom: 20 }}>{message}</p>
        <button
          onClick={onClose}
          style={{
            padding: '8px 16px',
            borderRadius: 4,
            border: 'none',
            backgroundColor: 'var(--green-color)',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />

      <PageContainer>
        <Title>Dados Pessoais e Informações do Ponto</Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="nome" type="text" placeholder="Nome" required />

          <Row>
            <Input name="email" type="email" placeholder="E-mail" required />
            <Input name="telefone" type="tel" placeholder="Telefone com DDD" />
          </Row>

          <Select name="perfil" required>
            <option value="">Selecione o tipo de perfil</option>
            <option value="Franqueado">Franqueado</option>
            <option value="Investidor">Investidor</option>
          </Select>

          <Row>
            <Input name="endereco" placeholder="Endereço (informações do imóvel)" />
            <Input name="cep" placeholder="CEP (informações do imóvel)" />
          </Row>

          <Row>
            <Input name="metragem" placeholder="Qual a metragem do seu ponto?" />
            <Input name="vagas" placeholder="Quantas Vagas de Estacionamento" />
          </Row>

          <Row>
            <Input name="link" placeholder="Link de Anúncio" />
            <Select name="tipo">
              <option value="">Tipo de Imóvel</option>
              <option value="BTS">BTS</option>
              <option value="Loja">Loja</option>
              <option value="Galpão">Galpão</option>
            </Select>
          </Row>

          <Row>
            <Input name="aluguel" placeholder="Valor de Aluguel" />
            <Input name="iptu" placeholder="IPTU Anual" />
          </Row>

          <TextArea
            name="comentario"
            placeholder="Escreva algo que ache importante complementar."
            rows={4}
          />

          <Input
            name="link_arquivo"
            placeholder="Link para arquivo (Google Drive, WeTransfer etc.)"
          />

          <CheckboxContainer>
            <input type="checkbox" id="termos" required />
            <label htmlFor="termos">
              Li e aceito os{' '}
              <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">
                termos de política e privacidade
              </a>
              .
            </label>
          </CheckboxContainer>

          <ButtonSubmit type="submit">ENVIAR</ButtonSubmit>
        </Form>
      </PageContainer>

      <Footer />

      {modalVisible && <Modal message={modalMessage} onClose={handleCloseModal} />}
    </>
  );
}

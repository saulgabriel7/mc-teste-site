import React from 'react';

export function BotaoCompartilharWhatsApp() {
  const compartilharNoWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const mensagem = encodeURIComponent("Encontrei um imóvel e gostaria de compartilhá-lo com você:");
    const linkWhatsApp = `https://wa.me/?text=${mensagem}%20${url}`;
    window.open(linkWhatsApp, '_blank');
  };

  return (
    <button onClick={compartilharNoWhatsApp}>
      Compartilhar
    </button>
  );
}
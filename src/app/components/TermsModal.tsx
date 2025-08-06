'use client';
import { useEffect, useState } from 'react';

interface Props {
  onAccept: () => void;
}

const TermsModal = ({ onAccept }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setVisible(false);
    onAccept();
  };

  if (!visible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Términos y Condiciones</h2>
        <p>
          Este sitio es una plataforma de entretenimiento basada en combinaciones numéricas. No ofrecemos premios, sorteos ni apuestas de ningún tipo. Al continuar, aceptas que esta experiencia es 100% recreativa.
        </p>
        <button onClick={handleAccept}>Aceptar y Continuar</button>
      </div>
    </div>
  );
};

export default TermsModal;

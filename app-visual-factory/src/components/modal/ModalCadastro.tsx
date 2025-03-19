import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export const ModalCadastro: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onNext,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop escuro
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // Fecha ao clicar no backdrop
    >
      <div
        style={{
          background: "#333", // Fundo escuro para o texto branco
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          color: "#fff",
          minWidth: "300px",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
      >
        <h2 style={{ background: "transparent" }}>Cadastro</h2>
        <p style={{ background: "transparent" }}>
          Preencha os dados e continue
        </p>
        <button
          onClick={onNext}
          style={{
            color: "white",
            background: "#555",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Continuar
        </button>
        <button
          onClick={onClose}
          style={{
            color: "white",
            background: "#555",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

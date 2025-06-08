import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalConfirmacao: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#333",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          color: "#fff",
          minWidth: "300px",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ background: "transparent" }}>Confirmação</h2>
        <p style={{ background: "transparent" }}>
          Seu cadastro foi enviado com sucesso!
        </p>
        <button
          onClick={onClose}
          style={{
            color: "white",
            background: "#555",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";
import { ModalCadastro } from "./modal/ModalCadastro";
import { ModalConfirmacao } from "./modal/ModalConfirmacao";

export const ProjectFactory = () => {
  const [showModal, setShowModal] = useState<"cadastro" | "confirmacao" | null>(
    null
  );

  return (
    <>
      <main style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <header
          style={{
            padding: "10px",
            width: "50%",
            margin: "auto",
            color: "#333",
          }}
        >
          <h1>Cadastro</h1>
        </header>

        <div
          style={{
            padding: "10px",
            width: "50%",
            margin: "auto",
          }}
        >
          <button
            style={{
              color: "white",
              padding: "10px",
              border: "none",
              boxShadow: "1px 2px 10px 5px rgba(0,0,0,0.5)",
            }}
            onClick={() => setShowModal("cadastro")}
          >
            Open Modal
          </button>
        </div>
      </main>

      {/* Importando Modal */}
      <ModalCadastro
        isOpen={showModal === "cadastro"}
        onNext={() => setShowModal("confirmacao")}
        onClose={() => setShowModal(null)}
      />
      <ModalConfirmacao
        isOpen={showModal == "confirmacao"}
        onClose={() => setShowModal(null)}
      />
    </>
  );
};

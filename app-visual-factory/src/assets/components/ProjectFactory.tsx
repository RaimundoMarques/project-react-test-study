import { useState } from "react";
import "./ProjectFactory.css";
import { Section01 } from "./Section01"; // Importando Section01

export const ProjectFactory = () => {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState<string[]>([]); // Estado para armazenar vários nomes

  const handleClick = () => {
    if (nome.trim() !== "") {
      setNomes([...nomes, nome]); // Adiciona o nome ao array
      setNome(""); // Limpa o input após adicionar
    }
  };

  return (
    <>
      <hr />

      <div style={{ padding: "10px" }}>
        <h2>Exemplo 02</h2>
        <p>Lista de Nomes</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite um nome..."
          />
          <button onClick={handleClick}>Adicionar Nome</button>
          {nomes.length > 0 && (
            <button onClick={() => setNomes([])}>Limpar Lista</button> // Botão para limpar os nomes
          )}
        </div>
      </div>

      <hr />

      {/* Passando o array de nomes para Section01 */}
      <Section01 nomes={nomes} />
    </>
  );
};

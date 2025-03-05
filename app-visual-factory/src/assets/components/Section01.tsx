import React from "react";

interface Section01Props {
  nomes: string[];
}

export const Section01: React.FC<Section01Props> = ({ nomes }) => {
  return (
    <div>
      <h3>Nomes Recebidos:</h3>
      {nomes.length > 0 ? (
        <ul>
          {nomes.map((nome, index) => (
            <li key={index}>{nome}</li> // Exibindo cada nome na lista
          ))}
        </ul>
      ) : (
        <p>Nenhum nome foi adicionado ainda.</p>
      )}
    </div>
  );
};

export default function Praias() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">

        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold mb-4 text-gray-700">Praias de João Pessoa</h1>
          <p className="text-gray-700 text-justify">
            A cidade é famosa por suas praias de águas mornas e coqueirais.
            Entre as mais conhecidas estão Tambaú, Cabo Branco, Praia do Jacaré
            e Manaíra, famosas pelo pôr do sol e beleza natural.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Joao_Pessoa_-_Praia_de_Tambau.jpg"
            alt="Praia de Tambaú"
            className="w-full h-48 object-cover rounded shadow-lg"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Praia_Cabo_Branco_Joao_Pessoa.jpg"
            alt="Praia de Cabo Branco"
            className="w-full h-48 object-cover rounded shadow-lg"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Praia_do_Jacar%C3%A9.jpg"
            alt="Praia do Jacaré"
            className="w-full h-48 object-cover rounded shadow-lg"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Praia_de_Manaira_Joao_Pessoa.jpg"
            alt="Praia de Manaíra"
            className="w-full h-48 object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

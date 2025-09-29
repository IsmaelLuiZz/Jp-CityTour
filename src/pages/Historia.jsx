export default function Historia() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        História de João Pessoa
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Joao_Pessoa_-_Paraiba.jpg"
          alt="João Pessoa"
          className="w-full md:w-1/2 rounded shadow-lg"
        />
        <p className="text-gray-700 text-justify md:w-1/2">
          João Pessoa, capital da Paraíba, é considerada a terceira cidade mais antiga do Brasil.
          Fundada em 1585, possui um rico patrimônio histórico e cultural, com fortes, igrejas e praças
          que contam a trajetória da cidade ao longo dos séculos. A cidade preserva seu charme colonial,
          combinando tradição e modernidade, sendo um destino turístico rico em cultura e história.
        </p>
      </div>
    </div>
  );
}

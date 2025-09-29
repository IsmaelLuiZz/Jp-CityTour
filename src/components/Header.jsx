import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">JP - Citytour</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-blue-300">História</Link>
          </li>
          <li>
            <Link to="/praias" className="hover:text-blue-300">Praias</Link>
          </li>
          <li>
            <Link to="/zoologico" className="hover:text-blue-300">Zoológico</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

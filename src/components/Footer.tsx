import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Million</h2>
          <p className="text-sm text-gray-400">
            Tu plataforma para encontrar propiedades exclusivas alrededor de
            Norte America.
          </p>
        </div>

        {/* 🔗 Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Enlaces útiles
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/featured" className="hover:text-white transition">
                Propiedades destacadas
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer down */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Million. Todos los derechos reservados.
      </div>
    </footer>
  );
}

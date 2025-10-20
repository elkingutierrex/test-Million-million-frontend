"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-white beat">
          Million
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-600 hover:text-gray-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:space-x-8 shadow md:shadow-none`}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/featured"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Destacadas
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

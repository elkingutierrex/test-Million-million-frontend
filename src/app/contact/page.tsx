import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>
      <p className="text-gray-600 mb-8">
        Si te interesa alguna de nuestras propiedades, puedes comunicarte con
        nosotros a través de los siguientes medios:
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-lg font-semibold text-gray-800">📞 Teléfono</p>
          <p className="text-gray-700">+57 310 555 1234</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-800">📧 Correo</p>
          <p className="text-gray-700">contacto@millionhomes.com</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-gray-800">📍 Dirección</p>
          <p className="text-gray-700">Cra. 7 #123-45, Bogotá, Colombia</p>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

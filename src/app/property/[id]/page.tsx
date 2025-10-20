"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProperties } from "@/data/mockProperties";

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = useParams();
  const property = mockProperties.find((prop) => prop.id === params.id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h3> Propiedad no encontrada </h3>
        <Link href="/" className="mt-4 text-indigo-600 hover:underline">
          Volver a la página principal
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-72 w-full sm:h-96 md:h-[500px]">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <span className="text-2xl font-semibold text-green-600">
            ${property.price.toLocaleString()}
          </span>
        </div>

        <div className="text-gray-600">
          <p className="text-lg">{property.address}</p>
          <p className="text-lg">
            {property.city}, {property.country}
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut urna
          ac nulla dignissim tincidunt. Sed sit amet est at quam tincidunt
          egestas. Vivamus sed vestibulum nisl. Nulla facilisi. Integer dictum
          elit vel magna pretium posuere.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

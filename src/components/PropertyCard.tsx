"use client";
import Image from "next/image";
import { Property } from "@/types/property";
import Link from "next/link";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <Link
      href={`/property/${property.id}`}
      className="block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
    >
      <div className="relative h-84 w-full">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          className="object-cover image-custom-egx"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
        <p className="text-sm text-gray-500">{property.address}</p>
        <p className="text-green-600 font-bold text-lg">
          ${property.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}

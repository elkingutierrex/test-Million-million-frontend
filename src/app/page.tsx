"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { mockProperties } from "./data/mockProperties";
import Navbar from "@/components/NavBar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = mockProperties.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city ? p.city === city : true;
    const matchesMin = minPrice ? p.price >= Number(minPrice) : true;
    const matchesMax = maxPrice ? p.price <= Number(maxPrice) : true;
    return matchesSearch && matchesCity && matchesMin && matchesMax;
  });

  const uniqueCities = [...new Set(mockProperties.map((p) => p.city))];

  return (
    <div>
      <main className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Propiedades disponibles
          </h1>

          {/* Filters */}
          <div className="bg-white shadow rounded-lg p-4 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Buscar por nombre o dirección"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Todas las ciudades</option>
              {uniqueCities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Precio mínimo"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Precio máximo"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          {/* Grid - properties */}
          {filteredProperties.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No se encontraron propiedades con los filtros seleccionados.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

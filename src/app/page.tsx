"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
// import { properties } from "../data/properties";
import Navbar from "@/components/NavBar";
import { getProperties } from "@/services/propertyService";
// import { mockProperties } from '../data/mockProperties';
import { Property } from "@/types/property";
import { useProperties } from "@/context/PropertiesContext";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { properties, setProperties } = useProperties();

  const cleanFilters = () => {
    setSearch("");
    setCity("");
    setMinPrice("");
    setMaxPrice("");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProperties({
          name: search,
          address: city,
          minPrice: minPrice ? Number(minPrice) : undefined,
          maxPrice: maxPrice ? Number(maxPrice) : undefined,
        });
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    loadData();
  }, [search, city, minPrice, maxPrice, setProperties]);

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city ? p.city === city : true;
    const matchesMin = minPrice ? p.price >= Number(minPrice) : true;
    const matchesMax = maxPrice ? p.price <= Number(maxPrice) : true;

    return matchesSearch && matchesCity && matchesMin && matchesMax;
  });

  const uniqueCities = [...new Set(properties.map((p) => p.city))];

  return (
    <div>
      <main className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Propiedades disponibles
          </h1>

          {/* Filters */}
          <div className="bg-white shadow rounded-lg p-4 mb-8 grid grid-cols-1 md:grid-cols-5 gap-4">
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
            <button
              onClick={cleanFilters}
              className="bg-gray-800 text-white rounded-lg p-2 hover:bg-gray-700 transition"
            >
              Limpiar filtros
            </button>
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

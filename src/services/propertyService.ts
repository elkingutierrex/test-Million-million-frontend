const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5039/api";

export async function getProperties(filters?: {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}) {
  const params = new URLSearchParams();

  if (filters?.name) params.append("name", filters.name);
  if (filters?.address) params.append("address", filters.address);
  if (filters?.minPrice) params.append("minPrice", filters.minPrice.toString());
  if (filters?.maxPrice) params.append("maxPrice", filters.maxPrice.toString());

  const response = await fetch(`${API_URL}/property?${params.toString()}`, {
    cache: "no-store", // evita usar caché
  });

  if (!response.ok) {
    throw new Error("Error al obtener las propiedades");
  }

  return response.json();
}

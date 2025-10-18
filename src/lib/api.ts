import axios from 'axios';
import { Property } from '@/types/property';

export const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
});

export const getProperties = async (): Promise<Property[]> => {
    const response = await apiClient.get<Property[]>('/properties');
    return response.data;
};

export const getPropertyById = async (id: string): Promise<Property> => {
    const response = await apiClient.get<Property>(`/properties/${id}`);
    return response.data;
};


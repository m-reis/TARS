import api from './api';
import { Client } from '@models/iClient';

const ClientService = {
  getAll: async (): Promise<Client[]> => {
    const response = await api.get('/clientes');
    
    return response.data;
  },

  getById: async (id: number): Promise<Client> => {
    const response = await api.get(`/clientes/${id}`);
    return response.data;
  },

  create: async (client: Omit<Client, 'idClientes'>): Promise<Client> => {
    const response = await api.post('/clientes', client);
    return response.data;
  },

  update: async (id: number, client: Partial<Client>): Promise<Client> => {
    const response = await api.put(`/clientes/${id}`, client);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/clientes/${id}`);
  },
};

export default ClientService;
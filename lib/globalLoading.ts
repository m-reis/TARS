import { GlobalLoadingProps } from '@/models/props/iGlobalLoadingProps';
import { create } from 'zustand';

export const globalLoading = create<GlobalLoadingProps>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
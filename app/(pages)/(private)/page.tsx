'use client'
import { Container } from '@mui/material';
import ClientsCards from '@/app/components/clients/clientsCards'


export default function Home() {
  return (
    <Container className="w-10/12 h-screen">
        <ClientsCards />

        My size
    </Container>
  );
}

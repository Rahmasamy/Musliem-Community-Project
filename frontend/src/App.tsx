import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import NoConnection from './layouts/lose-internet-connection/NoConnection'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
 

  return (
     <QueryClientProvider client={queryClient}>
      <NoConnection/>
      <AppRoutes/>
    </QueryClientProvider>
  
  )
}

export default App

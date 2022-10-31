'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }))

  
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <html>
          <head></head>
          <body>{children}</body>
        </html>
      </QueryClientProvider>
    </SessionProvider>
  )
}

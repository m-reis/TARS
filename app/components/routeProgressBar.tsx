
'use client';

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LinearProgress } from '@mui/material'

export default function RouteProgressBar() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }

    const handleComplete = () => {
      setTimeout(() => setLoading(false), 500) // atraso opcional para visualizar melhor
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <>
      {loading && (
        <LinearProgress className='absolute -bottom-1' color="primary" sx={{ height: 3, left: 0,  right: 0 }} />
      )}
    </>
  )
}
        


'use client'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  router.push('/dashboard/app')

  return <></>
}

export default Index

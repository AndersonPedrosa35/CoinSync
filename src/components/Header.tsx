import { useMobile } from '@/utils/useMobile'
import React from 'react'

export default function Header() {
  const { screenWidth } = useMobile()
  return (
    <div>{screenWidth}</div>
  )
}

import React from 'react'

interface SurfaceProps {
  children: React.ReactNode
}

const Surface = ({ children }: SurfaceProps) => {
  return <div style={{ backgroundColor: 'white' }}>{children}</div>
}

export { Surface }

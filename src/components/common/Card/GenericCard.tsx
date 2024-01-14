import React from 'react'
import { Card } from 'react-bootstrap'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const GenericCard = ({ children, className }: CardProps) => {
  return <Card className={className}>{children}</Card>
}

export default GenericCard

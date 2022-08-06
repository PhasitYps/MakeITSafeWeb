import { HTMLProps } from 'react'

export const Card = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-2xl p-4 sm:p-8 flex flex-col ${className}`}
      {...props}
    />
  )
}

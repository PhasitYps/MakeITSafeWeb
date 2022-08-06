import { HTMLProps } from 'react'

export const Layout = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 w-full max-w-6xl ${className}`}
      {...props}
    />
  )
}

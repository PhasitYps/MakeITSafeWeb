import { HTMLProps } from 'react'

export const CustomCard = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-2xl p-4 sm:p-4 flex flex-col shadow-2xl bg-white ${className}`}
      {...props}
    />
  )
}
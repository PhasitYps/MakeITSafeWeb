import { HTMLProps } from 'react'

export const CustomCircleAvater = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-[50%] shadow-2xl center text-center items-center justify-center align-middle ${className}`}
      {...props}
    />
  )
}
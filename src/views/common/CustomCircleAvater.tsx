import { HTMLProps } from 'react'

export const CustomCircleAvater = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-[50%] w-[75px] h-[75px] shadow-md center text-center items-center justify-center align-middle${className}`}
      {...props}
    />
  )
}
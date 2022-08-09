import { Layout } from './Layout'
import { useEffect } from 'react'
import Link from 'next/link'


export const Navbar = () => {


  const handleScroll = () => {
    console.log('this is handleScroll: ' + scrollY); 
  }
 
  useEffect(() => {
    console.log('this is useEffect.');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  return (
    <div className="h-12 sm:h-14">
      <div className="fixed top-0 w-screen h-12 sm:h-14 shadow-2xl  py-12 bg-[rgb(5,8,37)] z-20">
        <Layout className="flex w-full h-full items-center">
          <h1 className="font-bold text-[#D041f3]">FLOW</h1>
          <div className="flex items-center flex-1 px-4 justify-center">
            <a className="mx-2 w-16 text-white" href='#home'>Home</a>
            {/* <a className="mx-2 w-16 text-white" href='#problem'>Problem</a>
            <a className="mx-2 w-16 text-white" href='#activities'>Activities</a> */}
            <a className="mx-2 w-16 text-white" href='#timeline'>Timeline</a>
            <a className="mx-2 w-16 text-white" href='#blog'>Blog</a>
            
          </div>
          <div>
            <button className="CustomeRegisterNow px-8 py-3">
              <Link href={'https://form.jotform.com/221710975445054'} ><a target='_blank'>Register Now</a></Link>
            </button>
          </div>
        </Layout>
      </div>
    </div>
  )
}

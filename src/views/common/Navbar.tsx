import { Layout } from './Layout'
import { useEffect } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const handleScroll = () => {
    console.log('this is handleScroll: ' + scrollY)
    const navbar = document.getElementById('navbar')
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      if (navbar !== null) {
        const alpha = (scrollY / 800) * 0.5
        navbar.style.backgroundColor = 'rgba(5,8,37, ' + alpha + ')'
        navbar.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)'
        console.log('this is background color has')
      }
    } else {
      if (navbar !== null) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0)'
        navbar.style.boxShadow = 'none'
        console.log('this is background color none')
      }
    }
  }

  useEffect(() => {
    const width = screen.width
    console.log('this is width: ' + width)

    console.log('this is useEffect.')
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="h-12 sm:h-14 ">
      <div
        id="navbar"
        className="fixed top-0 w-screen h-12 sm:h-14 shadow-2xl  py-10 z-10"
      >
        <Layout className="flex w-full h-full items-center">
          <h1 className="font-bold text-[#D041f3] ">FLOW</h1>

          <div className="flex flex-1 justify-center items-center">
            <div className="mx-2">
              <a className="mx-2 w-16 text-white" href="#home">
                Home
              </a>
            </div>
            <div className="mx-2">
              <a className="mx-2 w-16 text-white" href="#problem">
                Problem
              </a>
            </div>
            <div className="mx-2">
              <a className="mx-2 w-16 text-white" href="#timeline">
                Timeline
              </a>
            </div>
            <div className="mx-2">
              <a className="mx-2 w-16 text-white" href="#member">
                About Us
              </a>
            </div>
          </div>
          <button className="CustomeRegisterNow px-4 py-1">
            <Link href={'https://form.jotform.com/221710975445054'}>
              <a target="_blank">Register Now</a>
            </Link>
          </button>

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#fff"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg> */}
        </Layout>

        {/* <div className="bg-[rgba(255,255,255,0.9)] absolute left-0 top-0 w-[100vw] h-[50vh]">
          <ul className="items-center justify-center absolute top-[50%] left-[50%]">
            <li>
              <a className="my-4 w-16 text-black" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="my-4 w-16 text-black" href="#problem">
                Problem
              </a>
            </li>
            <li>
              <a className="my-4 w-16 text-black" href="#timeline">
                Timeline
              </a>
            </li>

            <button className="CustomeRegisterNow px-8 py-3 my-4">
              <Link href={'https://form.jotform.com/221710975445054'}>
                <a target="_blank">Register Now</a>
              </Link>
            </button>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

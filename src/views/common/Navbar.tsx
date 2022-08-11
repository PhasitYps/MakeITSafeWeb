import { Layout } from './Layout'
import { useEffect, useState } from 'react'
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

  const [width, setWidth] = useState(0)
  const handleResize = () => {
    console.log('this is handleResize: ' + window.innerWidth)
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (width < 660) {
      console.log('this is Phone: ' + width)
    } else {
      console.log('this is Window: ' + width)
    }
  }, [width])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // if (width < 660) {
    //   console.log('this is Phone: ' + width)
    // } else {
    //   console.log('this is Window: ' + width)
    // }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="">
      <div
        id="navbar"
        className="fixed top-0 w-screen h-12 sm:h-14 shadow-2xl  py-10 z-30"
      >
        <Layout className="flex w-full h-full items-center">
          <img src="/ic_logo.png" width={'80px'} alt="logo" />

          <div className="flex flex-1 justify-center items-center">
            {width < 660 ? (
              <div></div>
            ) : (
              <>
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
              </>
            )}
          </div>

          <button className="CustomeRegisterNow px-4 py-2">
            <Link href={'https://form.jotform.com/221710975445054'}>
              <a target="_blank">Register Now</a>
            </Link>
          </button>
        </Layout>

        {width >= 660 ? (
          <div></div>
        ) : (
          <div className="flex items-center justify-center mt-10 ">
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
              <a className="mx-2 w-16 text-white " href="#timeline">
                Timeline
              </a>
            </div>
            <div className="mx-2">
              <a className="mx-2 w-16 text-white" href="#member">
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

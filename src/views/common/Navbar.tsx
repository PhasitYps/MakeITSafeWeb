import { Layout } from './Layout'
import { useRouter } from 'next/router'

export const Navbar = () => {

  const router = useRouter()

  const handleClickToRegister = () => {
    router.push('register');
  }


  return (
    <div className="h-12 sm:h-14 z-20">
      <div className="fixed top-0 w-screen h-12 sm:h-14 border-b border-gray-300 bg-blue-100 py-10">
        <Layout className="flex w-full h-full items-center">
          <h1 className="font-bold text-blue-600">FLOW</h1>
          <div className="flex items-center flex-1 px-4 justify-center">
            <a className="mx-2 w-16" href='#home'>Home</a>
            <a className="mx-2 w-16" href='#timeline'>Timeline</a>
            <a className="mx-2 w-16" href='#blog'>Blog</a>
        
          </div>
          <div>
            <button className="CustomeRegisterNow" onClick={handleClickToRegister}>
              Register Now
            </button>
          </div>
        </Layout>
      </div>
    </div>
  )
}

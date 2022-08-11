import Head from 'next/head'
import { Layout } from '../common/Layout'
import { Navbar } from '../common/Navbar'
import { Home } from './Home'

import Image from 'next/image'
import { Problem } from './Problem'
import { Activities } from './Activities'
import { Timeline } from './Timeline'
import { Reward } from './Reward'
import { TeamMember } from './TeamMember'
import { Partners } from './Partners'

// const sponsorsData = [
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
//   { image: '/img_avater.png', name: 'peopleName' },
// ]

export const LandingPage = () => {
  return (
    <div>
      <Head>
        <title>ASEAN MakeITSafe</title>
      </Head>


      {/* <section className='absolute top-0 left-0 right-0 z-[-1]'>
        <img
          src="/Images/001.svg"
          alt="Cartoon graduates jump with happiness"
          className=""
        />
        <img
          src="/Images/002.svg"
          alt="Cartoon graduates jump with happiness"
          className=""
        />
        <img
          src="/Images/002.svg"
          alt="Cartoon graduates jump with happiness"
          className=""
        />
        <img
          src="/Images/003.svg"
          alt="Cartoon graduates jump with happiness"
          className=""
          width={'100%'}
        />
       
        <img
          src="/Images/004.svg"
          alt="Cartoon graduates jump with happiness"
          className=""
        />
      </section> */}

      <Image
          src="/Images/BG1.svg"
          alt="Cartoon graduates jump with happiness"
          className=""
          width={1000}
          objectFit="cover"
          layout="fill"
        />

      <Navbar />

      <Layout className="">
        <Home />
        <Problem />
        <Activities />
        <Timeline />

        <Reward />
        <TeamMember />
        <Partners />
      </Layout>
      {/* <Blog /> */}
    </div>
  )
}

{
  /* <section id="donate">
          <div className="mt-[200px]">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">
              Donations / Funding
            </h1>
            <div className="flex items-center justify-center content-center">
              <CustomCard className="items-center w-fit">
                <img
                  src="/img_qr_code_donate.png"
                  height={'360px'}
                  width={'360px'}
                ></img>

                <h1 className="text-2xl mb-8 text-center text-gray-800">
                  Account number <br /> 012-3-45678-9
                </h1>
              </CustomCard>
            </div>
          </div>
        </section>

        <section id="sponser ">
          <div className="pt-[200px] ">
            <h1 className="text-center text-4xl font-bold mb-8 text-white">
              Sponsors
            </h1>
            <CustomCard>
              <div className="grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2">
                {sponsorsData.map(({ image, name }, index) => (
                  <CustomCircleAvater>
                    <img key={index} src={image} alt={name}></img>
                  </CustomCircleAvater>
                ))}
              </div>
            </CustomCard>
          </div>
        </section> */
}

{
  /* <section id="socialMedia">
          <div className="mb-[150px] bg-slate-100">
            <h1 className="text-center text-4xl font-bold mb-8 text-white">
              Social Media
            </h1>

            <div className="grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2"></div>
          </div>
        </section> */
}

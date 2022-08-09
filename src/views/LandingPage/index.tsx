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

      <div className="bg-image-wrapper">
        <Image
          src="/Images/bg_002.jpg"
          alt="Cartoon graduates jump with happiness"
          quality="100"
          layout="fill"
          objectFit="cover"
          width={'100vw'}
        />
      </div>

      <Navbar />

      <Layout className="z-1">
        <Home />
        <Problem />
        <Activities />
        <Timeline />
        {/* <Blog /> */}
        <Reward />
        <TeamMember />
        <Partners />
      </Layout>
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

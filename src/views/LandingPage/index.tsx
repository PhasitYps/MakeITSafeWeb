import Head from 'next/head'
import { Card } from '../common/Card'
import { CustomCard } from '../common/CustomCard'
import { CustomCircleAvater } from '../common/CustomCircleAvater'
import { Layout } from '../common/Layout'
import { Navbar } from '../common/Navbar'

const timelineData = [
  {
    title: 'Bootcamp',
    timelines: [
      {
        date: '1 May - 21 June',
        description: 'Bootcamp Registration',
      },
      {
        date: '24 June - 29 July',
        description: '6-week Hybrid Design Thinking Bootcamp',
      },
    ],
  },
  {
    title: 'Hackathon',
    timelines: [
      { date: '15 July - 5 August', description: 'Hackathon Registration' },
      { date: '29 -30 July', description: '2-days Hybrid Seminar' },
      { date: '26 - 28 August ', description: 'Hackathon Training - online' },
      { date: '28 August ', description: 'First Round Announcement ' },
      { date: '29 August - 11 September ', description: 'Incubation - online' },
      { date: '10 - 11 September ', description: 'Final Round Pitching ' },
      {
        date: '2 - 4 November ',
        description: 'Project Exhibition in Thailand',
      },
    ],
  },
]

const blogData = [
  { image: '/placeholder.png', title: 'Blog 1', author: 'Lorem' },
  { image: '/placeholder.png', title: 'Blog 2', author: 'Lorem' },
  { image: '/placeholder.png', title: 'Blog 3', author: 'Lorem' },
  { image: '/placeholder.png', title: 'Blog 4', author: 'Lorem' },
]

const partnerData = [
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
]

const sponsorsData = [
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
]

const memberData = [
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
]

export const LandingPage = () => {
  return (
    <div>
      <Head>
        <title>ASEAN MakeITSafe</title>
      </Head>

      <Navbar />

      <Layout>
        {/* Section 1 */}
        <article id="home" className="p-2">
          <div className="flex w-full sm:flex-row flex-col-reverse mt-48 mb-48">
            <div className="flex-1 flex flex-col self-stretch justify-center mr-8">
              <div>
                <h1 className="text-8xl font-bold">ASEAN</h1>
                <h1 className="text-6xl font-bold mb-8">Make IT Safe</h1>
                <p className="text-2xl break-words mb-8">
                  A Thailand-based interactive platform for ASEAN youth to
                  redesign cybersecurity solutions through D-thinking and
                  Hackathon.
                </p>
                {/* <button className="text-2xl font-bold text-white bg-blue-600 rounded-full px-12 py-4">
                Register Now
              </button> */}
              </div>
            </div>
            <div className="self-stretch mb-8 sm:mb-0">
              <img src="/placeholder.png" alt="Lorem Image" />
            </div>
          </div>
        </article>

        {/* Section 2 */}
        <section>
          <div className="grid w-full mb-24 grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="bg-white shadow-2xl">
              <h1 className="text-4xl mb-4 font-bold">Bootcamp</h1>
              <p className="text-md mb-8">
                The Design Thinking Bootcamp is divided into six weeks and aims
                to provide participants with the necessary knowledge and
                understanding to innovatively design solutions to CSAM issues.
                The Bootcamp will be held on a weekly basis, along with a design
                thinking process – empathize, define, ideate, prototype, and
                test – with the final week of boot camp serving as a showcase
                and seminar. In accordance with the design thinking process,
                domain knowledge, behavioral change framework, and gamification
                process will be integrated into the program, for example,
                Empathize will be presented with Patterns of Victimization
                topic, and Ideation week will be hosted with UX/UI design. It
                should be noted that all activities can be accessed online to
                ensure the inclusivity of ASEAN participants, which also allows
                world-class professors, international law enforcement agencies,
                and industry-leading companies to participate.{' '}
              </p>
              <div className="flex-1 flex flex-col justify-end">
                {/* <button className="text-xl font-bold text-white bg-blue-600 rounded-full px-8 py-2 w-fit">
                Register Now
              </button> */}
              </div>
            </Card>
            <Card className=" bg-white shadow-2xl">
              <h1 className="text-4xl mb-4 font-bold">Hackathon</h1>
              <p className="text-md mb-8">
                A transnational Hackathon ensures that our project will lead to
                practical and impactful implementation. A group of four
                participants will team up and submit an initial proposal
                focusing on the gamified approach to addressing CSAM issue. To
                be more specific, we expect participants to design and build
                games or solutions, which could nudge children or netizens not
                to generate, engage, or disseminate CSAM. Twenty selected teams
                will then participate in the Hackathon, and only the five
                strongest teams will proceed to the incubation process, which
                includes two weeks of rigorous training programs with competent
                mentors. Each incubated team has committed to delivering a game
                prototype and pitching back-to-back to the judge. Lastly, the
                judge will select three winning teams, but only the first-place
                team will receive further funding and travel to Bangkok,
                Thailand to exhibit their project to the Thai government along
                with ASEAN partners
              </p>
              <div className="flex-1 flex flex-col justify-end">
                {/* <button className="text-xl font-bold text-white bg-blue-600 rounded-full px-8 py-2 w-fit">
                Register Now
              </button> */}
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3 */}
        {/* <div className="mb-24">
          <h1 className="text-4xl font-bold mb-4">Timeline</h1>
          <div className="grid w-full grid-cols-1 sm:grid-cols-1 gap-8">
            
            {timelineData.map(({ title, timelines }, index) => (

              <div className="flex flex-col" key={index}>
                
                <div className="rounded-2xl p-4 bg-blue-200 h-96 max-h-screen overflow-auto">
                  <div className="grid grid-cols-1 gap-4">

                    {timelines.map(({ date, description }, index) => (

                      <div key={index} className="rounded-2xl p-4 bg-white">
                        <div className="flex justify-between">
                          <div className="flex flex-1">
                            <p className="w-32 shrink-0 mr-4">{date}</p>
                            <p className="mr-4">{description}</p>
                          </div>
                          <div className="rounded-full w-8 h-8 bg-blue-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div> */}

        {/* Section 3 */}
        <section id="timeline" className="mt-[80px]">
          <div className="mb-24 pt-20">
            <h1 className="text-4xl font-bold mb-4">Timeline</h1>
            <div className="grid w-full grid-cols-1 sm:grid-cols-1 gap-8">
              <div className="rounded-2xl p-4 bg-blue-200 h-[500px] max-h-screen overflow-auto shadow-2xl">
                <div className="grid grid-cols-1 gap-4">
                  {timelineData.map(({ title, timelines }, index) => (
                    <div className="" key={index}>
                      {timelines.map(({ date, description }, index) => (
                        <div className="p-2">
                          <div key={index} className="rounded-2xl p-4 bg-white">
                            <div className="flex justify-between">
                              <div className="flex flex-1">
                                <p className="w-32 shrink-0 mr-4">{date}</p>
                                <p className="mr-4">{description}</p>
                              </div>
                              <div className="rounded-full w-8 h-8 bg-blue-400" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="blog" className="mb-24">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
            {blogData.map(({ image, title, author }, index) => (
              <div className="flex flex-col mb-4" key={index}>
                <div
                  className="h-0 mb-4 relative"
                  style={{ paddingBottom: '66.67%' }}
                >
                  <img
                    className="w-full h-full absolute object-cover rounded-2xl"
                    src={image}
                    alt={title}
                  />
                </div>
                <h3 className="text-xl mb-2">{title}</h3>
                <p className="text-md">{author}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reward">
          <div className="mb-[150px] mt-[150px]">
            <h1 className="text-4xl font-bold mb-8">Prize For Winner</h1>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
              <CustomCard className="rounded-3xl">
                <div className="pt-10">
                  <p className="text-center text-3xl font-bold text-red-500">
                    3,000<span className="text-black"> USD</span>
                  </p>
                  <hr className="border-black border-solid border-[0.5px] rounded-2xl mt-5 mb-5 bg-black"></hr>
                  <p className="text-center font-bold text-gray-800 text-lg">
                    Teams will <br />
                    receive cash <br />
                    prize
                  </p>
                </div>
              </CustomCard>

              <CustomCard className="rounded-3xl">
                <div className="pt-2">
                  <p className="text-center text-3xl font-bold text-black ">
                    FLIGHT TO<span className="text-orange-500"> BANGKOK</span>
                  </p>
                  <hr className="border-black border-solid border-[0.5px] rounded-2xl mt-5 mb-5 bg-black"></hr>
                  <p className="text-center font-bold text-gray-800 text-lg">
                    To showcase
                    <br />
                    final prototype
                    <br />
                  </p>
                </div>
              </CustomCard>

              <CustomCard className="rounded-3xl">
                <div className="pt-10">
                  <p className="text-center text-3xl font-bold text-black">
                    FUNDING
                  </p>
                  <hr className="border-black border-solid border-[0.5px] rounded-2xl mt-5 mb-5 bg-black"></hr>
                  <p className="text-center font-bold text-gray-800 text-lg">
                    To develop
                    <br />
                    prototype
                    <br />
                  </p>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>

        <section id="partner">
          <div className="pb-[150px]">
            <h1 className="text-center text-4xl font-bold mb-8">
              Collaborations / Partners
            </h1>
            <CustomCard>
              <div className="grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2">
                {partnerData.map(({ image, name }, index) => (
                  <CustomCircleAvater>
                    <img key={index} src={image} alt={name}></img>
                  </CustomCircleAvater>
                ))}
              </div>
            </CustomCard>
          </div>
        </section>

        <section id="donate">
          <div className="mb-[150px]">
            <h1 className="text-4xl font-bold mb-8 text-center">
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

        <section id="sponser">
          <div className="pb-[150px]">
            <h1 className="text-center text-4xl font-bold mb-8">Sponsors</h1>
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
        </section>

        <section id="member">
          <div className="pb-[150px]">
            <h1 className="text-center text-4xl font-bold mb-8">Member</h1>

            <CustomCard>
              <div className="grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2">
                {memberData.map(({ image, name }, index) => (
                  <CustomCircleAvater>
                    <img key={index} src={image} alt={name}></img>
                  </CustomCircleAvater>
                ))}
              </div>
            </CustomCard>
          </div>
        </section>

        <section id='socialMedia'>

          <div className='mb-[150px] bg-slate-100'>
            <h1 className="text-center text-4xl font-bold mb-8">Social Media</h1>
            
            <div className='grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2'>

          

            </div>

          </div>

        </section>

      </Layout>
    </div>
  )
}

import Head from 'next/head'
import { Card } from '../common/Card'
import { CustomCard } from '../common/CustomCard'
import { CustomCircleAvater } from '../common/CustomCircleAvater'
import { Layout } from '../common/Layout'
import { Navbar } from '../common/Navbar'


const timelineList = [
  { date: 'Now - September 2', description: 'Application Open' },
  { date: 'September 6', description: 'First Round Announcement' },
  { date: 'September 10 -11', description: 'Workshop' },
  { date: 'September 17', description: 'Mentoring Session' },
  { date: 'September 24', description: 'Prototype Submission' },
  { date: 'October 1', description: 'Final Round Announcement' },
  { date: 'October 8', description: 'Hackathon and Winner Announcement' },
  { date: 'TBD', description: 'Showcase in Bangkok' },
]

const blogData = [
  { image: '/placeholder.png', title: '1. Did you really know what OCSEA is?', author: 'Lorem' },
  { image: '/placeholder.png', title: '2. Introduce to Gather.Town', author: 'Lorem' },
  { image: '/placeholder.png', title: '8 reasons why you should join MakeITSafe Hackathon.', author: 'Lorem' },
  { image: '/placeholder.png', title: 'Understand Gamification and Behavioral Change Toolkit.', author: 'Lorem' },
  { image: '/placeholder.png', title: 'Get to know keynote speakers.', author: 'Lorem' },
  { image: '/placeholder.png', title: '7 Get to know team member.', author: 'Lorem' },
  { image: '/placeholder.png', title: 'Top 5 Prototypes and the winner (ทำเผื่อไว้)', author: 'Lorem' },
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
  { image: '/TeamMember/001.jpg', name: 'peopleName' },
  { image: '/TeamMember/002.png', name: 'peopleName' },
  { image: '/TeamMember/003.png', name: 'peopleName' },
  { image: '/TeamMember/004.png', name: 'peopleName' },
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
          <div className="flex w-full sm:flex-row flex-col-reverse mt-[150px] mb-[150px]">
            <div className="flex-1 flex flex-col self-stretch justify-center mr-8">
              <div>
                <h1 className="text-8xl font-bold text-white">ASEAN</h1>
                <h1 className="text-6xl font-bold mb-8 text-white">
                  MakeITSafe
                </h1>
                <p className="text-2xl break-words mb-8 text-[#f6cb44]">
                  A community for ASEAN youth to redesign solutions to address
                  an arising cybercrime through multidisciplinary.
                </p>
                {/* <button className="text-2xl font-bold text-white bg-blue-600 rounded-full px-12 py-4">
                Register Now
              </button> */}
              </div>
            </div>
            <div className="self-stretch mb-8 sm:mb-0">
              <img
                className="rounded-2xl h-[30rem] w-[30rem]"
                src="/img_home.jpg"
                alt="Lorem Image"
              />
            </div>
          </div>
        </article>

        <section>
          <div className="mb-[150px]">
            <h1 className="text-4xl font-bold mb-10 text-white text-center">
              Topic: Redesign Educational Tools to Address Online <br /> Child
              Exploitation and Abuse (OCSEA)
            </h1>
            <div className="grid w-full mb-24 grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              <iframe
                className="flex flex-col items-center justify-center"
                width="480"
                height="315"
                src="https://www.youtube.com/embed/yfwmC7X44LM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <p className="text-white flex flex-col justify-center">
                Online Child Sexual Exploitation and Abuse or OCSEA involves the
                use of information and communication technology as a means to
                sexually abuse and/or sexually exploit children. Online
                predators use multiple techniques, starting from grooming to
                exploitation, to lure children to create and disseminate lewd
                contents online in exchange of valuable things. In addition,
                children inadvertently upload their sexual contents to the
                internet themselves so as to gain recognition or popularity,
                leading to unexpected outcome. As a result, it is necessary to
                educate and train children to be well aware of this threat by
                developing new educational tools that are enjoyable, measurable
                and attainable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="grid w-full mb-[150px] grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="bg-white shadow-2xl">
              <h1 className="text-4xl mb-4 font-bold">Workshop</h1>
              <p className="text-md mb-8">
                The workshop intends to provide participants with the knowledge
                and skills needed to innovatively design educational solutions
                to addressing OCSEA issues. That includes domain knowledge,
                design thinking process, behavioral design toolkit, and
                gamification elements. Aside from the OCSEA foundation,
                participants will hear from victims to better understand the
                root cause of the problem and identify critical behaviors that
                need to be modified, which will lead to creating user-centered
                prototypes. The designing prototypes will couple with behavioral
                design tools and gamification features to ensure the outcome is
                efficient and effective.
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
                Participants will team up and submit an initial proposal to
                address the OCSEA issues. Proposal ideas can include interactive
                learning platforms, mobile games, applications, or other online
                learning tools that could nudge children or netizens not to
                generate, engage, or disseminate OCSEA materials. Only five
                prototypes will process to the final round. We will select the
                best prototype to receive additional funding to develop
                prototype, leading to a showcase in Bangkok, Thailand.
              </p>
              <div className="flex-1 flex flex-col justify-end">
                {/* <button className="text-xl font-bold text-white bg-blue-600 rounded-full px-8 py-2 w-fit">
                Register Now
              </button> */}
              </div>
            </Card>
          </div>
        </section>

        {/* Section Timeline */}
        <section id="timeline">
          <div className="mb-[150px]">
            <h1 className="text-4xl font-bold mb-4 text-white">Timeline</h1>

            <div className="grid w-full grid-cols-1 sm:grid-cols-1 gap-8">
              <div className="rounded-2xl p-4 bg-blue-200 max-h-screen overflow-auto shadow-2xl">
                <div className="grid grid-cols-1 gap-4">
                  {timelineList.map(({ date, description }, index) => (
                    <div key={index} className="p-2">
                      <div className="rounded-2xl p-4 bg-white">
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
              </div>
            </div>

            <div className="items-center justify-center flex shadow-2xl rounded-2xl">
              <img
                src="/img_timeline_arrow process_diagram graph.png"
                alt="Timeline"
              />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        {/* <section id="timeline" className="mt-[80px]">
          <div className="mb-24 pt-20">
            <h1 className="text-4xl font-bold mb-4 text-white">Timeline</h1>
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
        </section> */}

        {/* Section 4 */}
        {/* <section id="blog" className="mb-24">
          <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>
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
                <h3 className="text-xl mb-2 text-white">{title}</h3>
                <p className="text-md text-white">{author}</p>
              </div>
            ))}
          </div>
        </section> */}

        <section id="blog" className="mb-24">
          <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>

          <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 justify-center items-center">
            {blogData.map(({ image, title, author }, index) => (
              <div className="" key={index}>
                <div className="mb-4">
                  <img className="w-52 rounded-2xl" src={image} alt={title} />
                </div>
                <h3 className="text-xl mb-2 text-white">{title}</h3>
                <p className="text-md text-white">{author}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reward">
          <div className="mb-[150px] mt-[150px]">
            <h1 className="text-4xl font-bold mb-8 text-white">
              Prize For Winner
            </h1>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mb-10">
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

            <div>
              <p className="text-white">
                -The top three teams will receive a cash prize of 500$, 400$,
                and 300$, respectively.
              </p>
              <br />
              <p className="text-white">
                - The winning team will receive additional fund for 1,000$.
              </p>
              <br />
              <p className="text-white">
                - The winning team will receive a round-trip ticket to Bangkok,
                Thailand, excluding hotels, transportation, and food.
              </p>
            </div>
          </div>
        </section>

        <section id="member">
          <div className="pb-[150px]">
            <h1 className="text-center text-4xl font-bold mb-8 text-white">
              Team Member
            </h1>

            <CustomCard>
              <div className="grid sm:grid-cols-4 grid-cols-2 gap-6 justify-items-center m-2">
                {memberData.map(({ image, name }, index) => (
                  <div className="items-center justify-center">
                    <div className="items-center justify-center flex">
                      <CustomCircleAvater>
                        <img key={index} src={image} alt={name} className='w-36 h-36'></img>
                      </CustomCircleAvater>
                    </div>
                    <p className='text-center'>{name}</p>
                  </div>
                ))}
              </div>
            </CustomCard>
          </div>
        </section>

        <section id="partner">
          <div className="pb-[150px]">
            <h1 className="text-center text-4xl font-bold mb-8 text-white">
              Partners
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
          <div className="pb-[150px] ">
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
        </section>

        {/* <section id="socialMedia">
          <div className="mb-[150px] bg-slate-100">
            <h1 className="text-center text-4xl font-bold mb-8 text-white">
              Social Media
            </h1>

            <div className="grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2"></div>
          </div>
        </section> */}
      </Layout>
    </div>
  )
}

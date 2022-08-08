import { useRouter, NextRouter } from 'next/router'
import { Layout } from '../common/Layout'
import { Navbar } from '../common/Navbar'
import { Footer } from './Footer'

export const BlogPage = () => {
  const router: NextRouter = useRouter()
  const { id } = router.query

  const blogData = [
    {
      title:
        'The Sandbox Co-Organizing Metaverse Summit 2022 Showcasing Ecosystem Impact',
      data: 'June 20, 2022',
      author: 'Metaverse summit',
      image: '/img_speaker.png',
      content: [
        {
          text: 'June 20th 2022, Paris - The metaverse has gained momentum recently, and it is predicted to continue to expand in the years to come. Metaverse Summit, with its co-organizer The Sandbox supports the development of various industry stakeholders and assists brands, start-ups, and corporations in determining their position and metaverse strategy.',
          type: 'title',
        },
        {
          text: 'The Sandbox co-organizing Metaverse Summit 2022 with ecosystem pavillion, supporting startups and female entrepreneurs',
          type: 'subtitle',
        },
        {
          text: 'Metaverse Summit has a unique position around several initiatives being taken to create an atmosphere that allows pioneers, developers, business people, and technologists to build the decentralized networks that will drive the coming phase of the digital economy. ',
          type: 'content',
        },
        {
          text: 'With six company booths under the Sandbox Pavilion, The Sandbox is co-organising Metaverse Summit 2022 to support creators, startups in the Metaverse ecosystem. Depending on the Ethereum blockchain, it is among the leading metaverse creator economies. It allows users to create, communicate, and make transactions from their gaming and real estate experiences. In the virtual world, people can play, construct, own their properties, and own in-game assets and additionally be able to sell these assets and receive cash in the real world.',
          type: 'content',
        },
        {
          text: 'One of many blockchain-based virtual worlds attempting to alter the dynamics of the gaming industry and compensate inventors for the worth they generate through user-generated subject matter is The Sandbox metaverse.',
          type: 'content',
        },
        {
          text: 'The Sandbox co-organizing Metaverse Summit 2022 with ecosystem pavillion, supporting startups and female entrepreneurs',
          type: 'subtitle',
        },
        {
          text: 'Metaverse Summit has a unique position around several initiatives being taken to create an atmosphere that allows pioneers, developers, business people, and technologists to build the decentralized networks that will drive the coming phase of the digital economy. ',
          type: 'content',
        },
        {
          text: 'With six company booths under the Sandbox Pavilion, The Sandbox is co-organising Metaverse Summit 2022 to support creators, startups in the Metaverse ecosystem. Depending on the Ethereum blockchain, it is among the leading metaverse creator economies. It allows users to create, communicate, and make transactions from their gaming and real estate experiences. In the virtual world, people can play, construct, own their properties, and own in-game assets and additionally be able to sell these assets and receive cash in the real world.',
          type: 'content',
        },
        {
          text: 'One of many blockchain-based virtual worlds attempting to alter the dynamics of the gaming industry and compensate inventors for the worth they generate through user-generated subject matter is The Sandbox metaverse.',
          type: 'content',
        },
        {
          text: 'The Sandbox co-organizing Metaverse Summit 2022 with ecosystem pavillion, supporting startups and female entrepreneurs',
          type: 'subtitle',
        },
        {
          text: 'Metaverse Summit has a unique position around several initiatives being taken to create an atmosphere that allows pioneers, developers, business people, and technologists to build the decentralized networks that will drive the coming phase of the digital economy. ',
          type: 'content',
        },
        {
          text: 'With six company booths under the Sandbox Pavilion, The Sandbox is co-organising Metaverse Summit 2022 to support creators, startups in the Metaverse ecosystem. Depending on the Ethereum blockchain, it is among the leading metaverse creator economies. It allows users to create, communicate, and make transactions from their gaming and real estate experiences. In the virtual world, people can play, construct, own their properties, and own in-game assets and additionally be able to sell these assets and receive cash in the real world.',
          type: 'content',
        },
        {
          text: 'One of many blockchain-based virtual worlds attempting to alter the dynamics of the gaming industry and compensate inventors for the worth they generate through user-generated subject matter is The Sandbox metaverse.',
          type: 'content',
        },
      ],
    },
  ]

  const blog = blogData[0]

  return (
    <div>
      <Navbar />
      <Layout>
        <article>
          <div className="pt-[100px]">
            <h1 className="font-bold text-white text-4xl mb-8">{blog.title}</h1>

            <div className="flex">
              <div className="flex px-2 py-1 rounded-2xl bg-[#f6cb44] mr-4 justify-center items-center">
                <img
                  className="mr-2"
                  src="/ic_user.png"
                  alt=""
                  width={'30px'}
                  height={'30px'}
                />
                <p className="font-bold text-black text-base">
                  <span>By</span> {blog.author}
                </p>
              </div>

              <div className="flex p-2 rounded-2xl bg-[#f6cb44] justify-center items-center ">
                <img
                  className="mr-2"
                  src="/ic_calendar.png"
                  alt="date"
                  width={'30px'}
                  height={'30px'}
                />
                <p className="font-bold text-black text-base">{blog.data}</p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-10 mb-16">
              <img
                className="rounded-2xl shadow-2xl w-[1200] h-[600]"
                src={blog.image}
                alt="author"
              />
            </div>
          </div>
        </article>

        {blog.content.map(({ text, type }, index) => {
          if (type === 'title') {
            return (
              <div className="text-white font-bold text-xl">
                <h1>{text}</h1>
                <br />
                <br />
              </div>
            )
          } else if (type === 'subtitle') {
            return (
              <div className="text-gray-400 font-bold text-xl">
                <br />
                <p>{text}</p>
                <br />
              </div>
            )
          } else if (type === 'content') {
            return (
              <div className="text-white text-xl">
                <p>{text}</p>
                <br />
              </div>
            )
          } else {
            return <div className="text-white">Nothing.</div>
          }
        })}

        <div className='py-20'></div>
      </Layout>

      <Footer />

    </div>
  )
}


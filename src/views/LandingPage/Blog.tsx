import { useRouter } from 'next/router'

const blogData = [
    {
      image: '/placeholder.png',
      title: '1. Did you really know what OCSEA is?',
      author: 'Lorem',
    },
    {
      image: '/placeholder.png',
      title: '2. Introduce to Gather.Town',
      author: 'Lorem',
    },
    {
      image: '/placeholder.png',
      title: '8 reasons why you should join MakeITSafe Hackathon.',
      author: 'Lorem',
    },
    {
      image: '/placeholder.png',
      title: 'Understand Gamification and Behavioral Change Toolkit.',
      author: 'Lorem',
    },
    {
      image: '/placeholder.png',
      title: 'Get to know keynote speakers.',
      author: 'Lorem',
    },
    {
      image: '/placeholder.png',
      title: '7 Get to know team member.',
      author: 'Lorem',
    },
    {
      image: '/placeholder.png',
      title: 'Top 5 Prototypes and the winner (ทำเผื่อไว้)',
      author: 'Lorem',
    },
  ]

const handleClickToBlogsPage = (id: String)=>{
  const router = useRouter()
  router.push('/blogs/'+id)
}

export const Blog = () => {
  return (
    <section id="blog" className="mt-[200px]">
      <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>

      <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 justify-center items-center">
        {blogData.map(({ image, title, author }, index) => (
          <div className="" key={index} onClick={()=>{handleClickToBlogsPage('1')}}>
            <div className="mb-4">
              <img className="w-52 rounded-2xl" src={image} alt={title} />
            </div>
            <h3 className="text-xl mb-2 text-white">{title}</h3>
            <p className="text-md text-white">{author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

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

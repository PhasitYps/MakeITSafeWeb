import { CustomCard } from '../common/CustomCard'
import { CustomCircleAvater } from '../common/CustomCircleAvater'

const memberData = [
  { image: '/TeamMember/001.jpg', name: 'FullName' },
  { image: '/TeamMember/002.png', name: 'FullName' },
  { image: '/TeamMember/003.png', name: 'FullName' },
  { image: '/TeamMember/004.png', name: 'FullName' },
  { image: '/img_avater.png', name: 'FullName' },
  { image: '/img_avater.png', name: 'FullName' },
  { image: '/img_avater.png', name: 'FullName' },
  { image: '/img_avater.png', name: 'FullName' },
]
export const TeamMember = () => {
  return (
    <section id="member">
      <div className="pt-[200px]">
        <h1 className="text-center text-4xl font-bold mb-8 text-white">
          Team Member
        </h1>

        <CustomCard>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-6 justify-items-center m-2">
            {memberData.map(({ image, name }, index) => (
              <div className="items-center justify-center">
                <div className="items-center justify-center flex">
                  <CustomCircleAvater>
                    <img
                      key={index}
                      src={image}
                      alt={name}
                      className="w-36 h-36"
                    ></img>
                  </CustomCircleAvater>
                </div>
                <p className="text-center">{name}</p>
              </div>
            ))}
          </div>
        </CustomCard>
      </div>
    </section>
  )
}

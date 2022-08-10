import { CustomCard } from '../common/CustomCard'
import { CustomCircleAvater } from '../common/CustomCircleAvater'

const memberData = [
  { image: '/TeamMember/001.jpg', name: 'Nagorn Promma' },
  { image: '/TeamMember/002.png', name: 'Krerkkaiwan Kajohnkunchonlathorn' },
  { image: '/TeamMember/003.png', name: 'Pinyo Meephiam' },
  { image: '/TeamMember/004.png', name: 'Tita Leelathipkul' },
]
export const TeamMember = () => {
  return (
    <section id="member">
      <div className="pt-[200px]">
        <h1 className="text-center text-4xl font-bold mb-8 text-[#d041f3]">
          Team Member
        </h1>

        <div>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-1 justify-items-center m-2">
            {memberData.map(({ image, name }, index) => (
              <CustomCard className="items-center justify-center w-56" key={index}>
                <div className="items-center justify-center flex">
                  <CustomCircleAvater>
                    <img
                      key={index}
                      src={image}
                      alt={name}
                      className="w-24 h-24 rounded-[50%]"
                    ></img>
                  </CustomCircleAvater>
                </div>
                <p className="text-center mt-4 font-bold">{name}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { CustomCard } from '../common/CustomCard'
import { CustomCircleAvater } from '../common/CustomCircleAvater'

const partnerData = [
  { image: '/PartnerLogo/hackathon_th.png', name: 'peopleName' },
  { image: '/PartnerLogo/hug_project.png', name: 'peopleName' },
  { image: '/PartnerLogo/nudge_th.png', name: 'peopleName' },
  { image: '/PartnerLogo/nyu.png', name: 'peopleName' },
  { image: '/PartnerLogo/police_cadet_academy.png', name: 'peopleName' },
  { image: '/PartnerLogo/tij.png', name: 'peopleName' },
]

export const Partners = () => {
  return (
    <section id="partner">
      <div>
        <div className="pt-[200px] pb-[200px]">
          <h1 className="text-center text-4xl font-bold mb-8 text-[#d041f3]">
            Partners
          </h1>
          <div className="flex items-center justify-center">
            <div>
              <img
                src={'/logo_sftf.png'}
                className="w-[24rem] rounded-2xl shadow-md"
              ></img>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CustomCard className="my-4">
              <div className="grid sm:grid-cols-6 grid-cols-2 gap-1 justify-items-center justify-items-center">
                {partnerData.map(({ image, name }, index) => (
                  <img key={index} src={image} className="w-14 h-14 mx-2"></img>
                ))}
              </div>
            </CustomCard>
          </div>
        </div>
      </div>
    </section>
  )
}

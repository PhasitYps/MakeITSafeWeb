import { CustomCard } from '../common/CustomCard'
import { CustomCircleAvater } from '../common/CustomCircleAvater'

const partnerData = [
  { image: '/PartnerLogo/hackathon_th.png', name: 'peopleName' },
  { image: '/PartnerLogo/hug_project.png', name: 'peopleName' },
  { image: '/PartnerLogo/nudge_th.png', name: 'peopleName' },
  { image: '/PartnerLogo/nyu.png', name: 'peopleName' },
  { image: '/PartnerLogo/police_cadet_academy.png', name: 'peopleName' },
  { image: '/PartnerLogo/tij.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
  { image: '/img_avater.png', name: 'peopleName' },
]

export const Partners = () => {
  return (
    <section id="partner">
      <div className="pt-[200px] pb-[200px]">
        <h1 className="text-center text-4xl font-bold mb-8 text-white">
          Partners
        </h1>
        <CustomCard>
          <div className="grid sm:grid-cols-8 grid-cols-2 gap-6 justify-items-center m-2">
            {partnerData.map(({ image, name }, index) => (
              <img
                key={index}
                src={image}
                alt={name}
                className="w-20 h-20"
              ></img>
            ))}
          </div>
        </CustomCard>
      </div>
    </section>
  )
}

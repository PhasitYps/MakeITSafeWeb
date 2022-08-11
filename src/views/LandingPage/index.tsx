import { Layout } from '../common/Layout'
import { Home } from './Home'
import { Problem } from './Problem'
import { Activities } from './Activities'
import { Timeline } from './Timeline'
import { TeamMember } from './TeamMember'
import { Partners } from './Partners'
import { PrizeForWinner } from './PrizeForWinner'

export const LandingPage = () => {
  return (
    <>
      <div className="relative">
        <Layout>
          <Home />
        </Layout>

        <img
          className="absolute top-5 left-20"
          src="/Images/img_star_blue.svg"
          width={'150px'}
          alt=""
        />
        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />
        <img
          className="absolute bottom-0 left-20"
          src="/Images/img_cartoon1.svg"
          width={'300px'}
          alt=""
        />
        <img
          className="absolute bottom-0 right-0"
          src="/Images/img_two_line.svg"
          width={'300px'}
          alt=""
        />
      </div>
      <div className="relative ">
        <Layout>
          <Problem />
        </Layout>

        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />

        <img
          className="z-10 absolute bottom-0 right-10"
          src="/Images/img_star_pink.svg"
          width={'240px'}
          alt=""
        />
      </div>
      <div className="relative ">
        <Layout>
          <Activities />
        </Layout>

        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />
      </div>

      <div className="relative ">
        <Layout>
          <Timeline />
        </Layout>

        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />

        <img
          className=" absolute left-0 top-10 rotate-180"
          src="/Images/img_two_line.svg"
          width={'240px'}
          alt=""
        />

        <img
          className=" absolute bottom-0 right-0"
          src="/Images/img_two_line.svg"
          width={'240px'}
          alt=""
        />

        <img
          className=" absolute top-[60%] left-0"
          src="/Images/img_six_line.svg"
          width={'240px'}
          alt=""
        />

      </div>

      <div className="relative">
        <Layout>
          <PrizeForWinner />
        </Layout>

        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />

        <img
          className="z-10 absolute top-0 left-0"
          src="/Images/img_trophy.svg"
          width={'200px'}
          alt=""
        />
      </div>

      <div className="relative ">
        <Layout>
          <TeamMember />
        </Layout>

        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />

        <img
          className="absolute top-40 right-5"
          src="/Images/img_woman_brown.svg"
          width={'150px'}
          alt=""
        />

        <img
          className="absolute top-40 left-5"
          src="/Images/img_man_blue.svg"
          width={'150px'}
          alt=""
        />
        {/* <img
          className="absolute top-0 right-5"
          src="/Images/img_man_pink.svg"
          width={'150px'}
          alt=""
        /> */}
      </div>

      <div className="relative">
        <Layout>
          <Partners />
        </Layout>

        <img
          className="z-10 absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="/Images/img_star.svg"
          width={'1000px'}
          alt=""
        />

        <img
          className="absolute bottom-0 left-0"
          src="/Images/img_bar_chart.svg"
          width={'300px'}
          alt=""
        />
      </div>

      {/* <Blog /> */}
    </>
  )
}

import { CustomCard } from '../common/CustomCard'
export const Reward = () => {
  return (
    <section id="reward">
      <div className="mt-[200px]">
        <h1 className="text-4xl font-bold mb-8 text-white">Prize For Winner</h1>
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
          <p className="text-white text-xl">
            -The top three teams will receive a cash prize of 500$, 400$, and
            300$, respectively.
          </p>
          <br />
          <p className="text-white text-xl">
            - The winning team will receive additional fund for 1,000$.
          </p>
          <br />
          <p className="text-white text-xl">
            - The winning team will receive a round-trip ticket to Bangkok,
            Thailand, excluding hotels, transportation, and food.
          </p>
        </div>
      </div>
    </section>
  )
}

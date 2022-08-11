import { Card } from '../common/Card'

export const Activities = () => {
  return (
    <section id="activities">
      <div className="grid w-full mt-[200px] grid-cols-1 sm:grid-cols-2 gap-8">
        <Card className="bg-white shadow-2xl">
          <h1 className="text-4xl mb-4 font-bold">Workshop</h1>
          <p className="text-md mb-8">
            The workshop intends to provide participants with the knowledge and
            skills needed to innovatively design educational solutions to
            addressing OCSEA issues. That includes domain knowledge, design
            thinking process, behavioral design toolkit, and gamification
            elements. Aside from the OCSEA foundation, participants will hear
            from victims to better understand the root cause of the problem and
            identify critical behaviors that need to be modified, which will
            lead to creating user-centered prototypes. The designing prototypes
            will couple with behavioral design tools and gamification features
            to ensure the outcome is efficient and effective.
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
            Participants will team up and submit an initial proposal to address
            the OCSEA issues. Proposal ideas can include interactive learning
            platforms, mobile games, applications, or other online learning
            tools that could nudge children or netizens not to generate, engage,
            or disseminate OCSEA materials. Only five prototypes will process to
            the final round. We will select the best prototype to receive
            additional funding to develop prototype, leading to a showcase in
            Bangkok, Thailand.
          </p>
          <div className="flex-1 flex flex-col justify-end">
            {/* <button className="text-xl font-bold text-white bg-blue-600 rounded-full px-8 py-2 w-fit">
                Register Now
              </button> */}
          </div>
        </Card>
      </div>
    </section>
  )
}

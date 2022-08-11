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

export const Timeline = () => {
  return (
    <section id="timeline">
      <div className="mt-[200px]">
        <h1 className="text-4xl font-bold mb-4 text-white">Timeline</h1>

        {timelineList.map(({ date, description }, index) => (
          <div key={index} className="p-2">
            <div className="rounded-[30px] p-2 bg-white">
              <div className="flex justify-between">
                <div className="flex flex-1">
                  <div className="flex items-center justify-center m-1 py-2 px-3 rounded-[30px] bg-[#f6cb44]">
                    <img
                      className="mr-4"
                      src="/ic_calendar.png"
                      alt="ic_calendar"
                      width={'24px'}
                      height={'24px'}
                    />
                    <p className="w-40 shrink-0 mr-4 font-bold">{date}</p>
                  </div>
                  <div className="items-center justify-center flex">
                    <p className="ml-4">{description}</p>
                  </div>
                </div>
                {/* <div className="rounded-full w-8 h-8 bg-blue-400" /> */}
              </div>
            </div>
          </div>
        ))}

        <div className="items-center justify-center flex ">
          <img
            src="/img_process_diagram_graph.png"
            alt="Timeline"
          />
        </div>
      </div>
    </section>
  )
}

/* <section id="timeline">
          <div className="mt-[200px]">
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
        </section> */

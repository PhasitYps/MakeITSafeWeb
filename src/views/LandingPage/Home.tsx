export const Home = () => {
  return (
    <article id="home" className="">
      <div className="flex w-full sm:flex-row flex-col-reverse pt-[150px] pb-[200px]">
        <div className="flex-1 flex flex-col self-stretch justify-center mr-8">
          <div>
            <h1 className="text-6xl font-bold text-white">ASEAN</h1>
            <h1 className="text-5xl font-bold mb-8 text-white">MakeITSafe</h1>
            <p className="text-2xl break-words mb-8 text-[#f6cb44]">
              A community for ASEAN youth to redesign solutions to address an
              arising cybercrime through multidisciplinary.
            </p>
            {/* <button className="text-2xl font-bold text-white bg-blue-600 rounded-full px-12 py-4">
                Register Now
              </button> */}
          </div>
        </div>
        <div className="self-stretch mb-8 sm:mb-0">
          <img
            className="rounded-2xl h-[24rem] w-[24rem]"
            src="/Images/img_home.jpg"
            alt=""
          />
        </div>
      </div>
    </article>
  )
}

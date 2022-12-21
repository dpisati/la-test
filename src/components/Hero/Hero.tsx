export default function Hero() {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-between">
        <div className="max-w-[600px] pl-24 pt-20 pb-10 pr-14 rounded-r-3xl bg-gray-700 bg-opacity-20 backdrop-blur-md">
          <h1 className="text-6xl font-semibold text-pw-grey-light">
            Perfect Weather <br />
            For Your Next
            <br />
            Adventure
          </h1>

          <p className="text-lg font-normal leading-5 text-pw-grey-light mt-5">
            Leave the forecasts and planning to us! Our powerful <br />
            weather and marine tools take care of everything
            <br /> so you can focus on what you love.
          </p>

          <button className="bg-pw-green rounded-full mt-12 px-8 py-4 font-bold text-pw-grey-light text-sm  hover:brightness-90 transition ease-in-out duration-300">
            Sign up FREE Now
          </button>

          <p className="w-fit text-center ml-2 mt-6 text-pw-grey-light ">
            Join over <span className="font-bold">1 Million+</span> <br />
            marine users worldwide
          </p>
        </div>
      </div>
    </div>
  );
}

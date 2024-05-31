import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl py-3">
        All your digital products
        <strong className="font-extrabold text-blue-700 sm:block py-3"> Is one click Away </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
       Start Explloring state of the art Assets Now
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Hero
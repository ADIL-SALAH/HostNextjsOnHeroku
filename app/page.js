'use client'
import BackgroundCircle from "./components/backgroundCircle";
import TypeWriterText from "./components/type writer text/typeWriterText";

export default function Home() {

  return (
    <main className="flex h-screen align-middle items-center text-yellow-600 justify-center   " >
      <BackgroundCircle />
      <TypeWriterText />

      <div className='bg-yellow-600 -z-20  lg:w-screen w-[1800px] h-52 absolute md:opacity-20 opacity-25 lg:top-0  md:-left-96 -rotate-45' />


    </main>
  )
}

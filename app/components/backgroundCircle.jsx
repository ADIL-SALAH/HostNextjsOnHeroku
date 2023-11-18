import React from 'react'

function BackgroundCircle() {
    return (
        <div className='flex justify-center items-center '>
            <div className="border border-yellow-300  lg:w-[500px] w-[400px] h-[400px] md:w-[300px] md:h-[300px] lg:h-[500px] rounded-full animate-pulse opacity-10 absolute " />
            <div className="border border-yellow-300 absolute lg:w-[300px] w-[300px] h-[300px] md:w-[200px] md:h-[200px] lg:h-[300px] rounded-full animate-ping top-68 opacity-40" style={{ animation: 'ping 10s linear infinite ' }} />
            <div className="border border-yellow-300 absolute lg:w-[200px] w-[200px] h-[200px] md:w-[160px] md:h-[160px] lg:h-[200px] rounded-full animate-ping top-68 opacity-40" style={{ animation: 'ping 12s linear infinite ' }} />
            <div className="border border-yellow-300 absolute lg:w-[160px] w-[160px] h-[160px] md:w-[100px] md:h-[100px] lg:h-[160px] rounded-full animate-ping top-68 opacity-30" style={{ animation: 'ping 14s linear infinite ' }} />
            <div className="border border-yellow-300 absolute lg:w-[80px] w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:h-[80px] rounded-full animate-ping top-68 opacity-25" style={{ animation: 'ping 16s linear infinite ' }} />
            <div className="border border-yellow-300 absolute lg:w-[40px] w-[40px] h-[40px] md:w-[40px] md:h-[40px] lg:h-[40px] rounded-full animate-ping top-68 opacity-10" style={{ animation: 'ping 18s linear infinite ' }} />

        </div>
    )
}

export default BackgroundCircle
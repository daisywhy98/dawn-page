import React from 'react'
import CurrentTime from './CurrentTime'
import Population from './Population'


const DjHeader = () => {
    return (
       
        <div className='w-full h-48 p-6' style={{ backgroundImage: "url('/images/rotating-galex-6.gif')", backgroundSize: "100% auto", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat"  }}>
            <div className="text-3xl font-bold text-green-200">Welcome to Dawn&apos;s website</div>
            <div className='flex flex-row items-center justify-between'>
            <CurrentTime></CurrentTime>
            <Population></Population>
            </div>
       
        </div>
    )
}

export default DjHeader
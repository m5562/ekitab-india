import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed h-12'>
        <div className='h-full mx-5'>
            <div className="logo">
                <Image src={"/images/cime.jpg"} width={50} height={50} alt='cime logo'></Image>
            </div>
        </div>
    </div>
  )
}

export default Navbar
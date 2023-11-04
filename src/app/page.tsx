'use client'

import { useRouter } from 'next/navigation';


export default function HomeLogo({ font }: {font: String}) {
  const router = useRouter()

  return (
    <div className='home-logo-container'>
      <img 
        className="rib-navbar-logo" 
        src="https://res.cloudinary.com/dxvof8226/image/upload/v1698837362/RIB_HEART_PNG_4x_ipr8vl.png"
        onClick={()=> {
          router.push('/home')
        }} 
      />
    </div>
  )
}

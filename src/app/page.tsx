'use client'

import { useRouter } from 'next/navigation';


export default function HomeLogo() {
  const router = useRouter()

  return (
    <div className='home-logo-container'>
      <img 
        className="rib-navbar-logo" 
        src="https://res.cloudinary.com/dxvof8226/image/upload/v1705831305/Trans_RIB_LOGO_vmvnqi.png"
        onClick={()=> {
          router.push('/home')
        }} 
      />
    </div>
  )
}
